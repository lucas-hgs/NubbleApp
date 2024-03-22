import {ImageForUpload} from './multimediaType';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  //TODO IMPLEMENTAR

  return {
    uri: imageUri,
    name: 'name',
    type: 'image/png',
  };
}

export const multimediaService = {prepareImageForUpload};
