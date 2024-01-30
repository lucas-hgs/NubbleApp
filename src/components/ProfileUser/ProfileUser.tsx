import React from 'react';
import {Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type ProfileUserProps = {user: Pick<User, 'username' | 'profileUrl' | 'id'>};

export function ProfileUser({user}: ProfileUserProps) {
  const navigation = useNavigation();

  function navigateToProfileScreen() {
    navigation.navigate('ProfileScreen', {
      userId: user.id,
    });
  }

  return (
    <Pressable onPress={navigateToProfileScreen}>
      <Box mb="s16" style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
