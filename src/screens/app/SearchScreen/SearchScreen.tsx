import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';

import {Icon, ProfileUser, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

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
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </Screen>
  );
}
