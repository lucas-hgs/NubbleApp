import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import useTheme from '@shopify/restyle/dist/hooks/useTheme';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.background,
      }}>
      <Text preset="paragraphMedium" bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
