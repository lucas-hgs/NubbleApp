import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  checkRound: CheckRoundIcon,
  comment: CommentIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  errorRound: ErrorRoundIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  messageRound: MessageRoundIcon,
  newPost: NewPostIcon,
  profileIcon: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
