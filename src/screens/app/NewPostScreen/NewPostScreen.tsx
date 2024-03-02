import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

import {PermissionManager, Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen() {
  const [selectedImage, setSelectedImage] = useState<string>();
  const permission = usePermission('photoLibrary');
  const {photoList, fetchNextPage} = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita a aplicação acessar as fotos da sua galeria">
      <Screen canGoBack title="Novo post" noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          numColumns={NUM_COLUMNS}
          data={photoList}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={
            <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
          }
        />
      </Screen>
    </PermissionManager>
  );
}
