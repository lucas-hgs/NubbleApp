import {useCallback, useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserGetById(id: number) {
  const [user, setUser] = useState<User | null>();
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(async () => {
    try {
      setUser(null);
      setLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    error,
    loading,
  };
}
