import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingVertical="s14"
        paddingHorizontal="s16"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <RNTextInput
          placeholder="Adicione um comentário"
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray1}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
