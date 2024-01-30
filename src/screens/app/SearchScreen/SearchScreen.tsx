import React, {useState} from 'react';

import {useUserSearch} from '@domain';

import {Icon, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text>Search Screen</Text>
      {list.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}
