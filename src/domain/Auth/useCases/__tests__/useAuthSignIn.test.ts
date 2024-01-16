import {renderHook} from '@testing-library/react-native';
import {AllTheProviders, waitFor} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mockedData/mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(
      () => useAuthSignIn({onSuccess: mockedOnSuccess}),
      {
        wrapper: AllTheProviders,
      },
    );

    result.current.signIn({email: 'lucas@gmail.com', password: '123456'});

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });

  it('calls the onError function with a message if sign-in fails', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValue(new Error('invalid user'));

    const mockedOnError = jest.fn();
    const {result} = renderHook(() => useAuthSignIn({onError: mockedOnError}), {
      wrapper: AllTheProviders,
    });

    result.current.signIn({email: 'lucas@gmail.com', password: '123456'});

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith('invalid user');
  });
});
