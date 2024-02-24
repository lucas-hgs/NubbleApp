import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {TextProps} from '../Text/Text';

import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {
        color: 'primaryContrast',
      },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: {
        color: 'primary',
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  ghost: {
    default: {
      container: {
        height: 40,
        backgroundColor: 'white70',
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false,
        },
      },
    },
    disabled: {
      container: {
        backgroundColor: 'grayWhite',
        height: 40,
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false,
        },
      },
    },
  },
};
