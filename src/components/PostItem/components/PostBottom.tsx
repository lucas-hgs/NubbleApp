import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, commentCount, text, id}: Props) {
  let commentText = getCommentText(commentCount);

  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text color="gray1" semiBold preset="paragraphMedium">
        {text}
      </Text>

      <Text
        onPress={navigateToPostCommentScreen}
        bold
        preset="paragraphSmall"
        mt="s8"
        color="primary">
        {commentText}
      </Text>
    </Box>
  );
}

function getCommentText(commentCount: number): string {
  if (commentCount === 0) {
    return 'faça o primeiro comentário';
  } else if (commentCount === 1) {
    return 'ver 1 comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
