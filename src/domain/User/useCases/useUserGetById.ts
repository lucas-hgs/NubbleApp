import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query/build/legacy/useQuery';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, // 30 segundos
  });

  return {
    user: data,
    isError,
    isLoading,
  };
}
