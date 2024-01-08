import {authApi, AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authApi.isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();

          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials =
          await authService.authenticatedByRefreshToken(
            authCredentials?.refreshToken,
          );

        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remove component when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
