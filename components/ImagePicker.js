import {
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Imagepick = () => {
  const [cameraPhoto, setCameraPhoto] = useState('');
  const [galleryPhoto, setGalleryPhoto] = useState('');
  const options = {
    saveToPhoto: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical:45,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FCFCFC',
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: '#4CBD01',
          width: 155,
          height: 155,
        }}>
        {/* <TouchableOpacity onPress={() => openCamera()}>
        <Text>Open camera</Text>
      </TouchableOpacity>
      {
        cameraPhoto?
        <Image   style={{width:100,height:100}} source={{uri: cameraPhoto}}/>:null
      } */}
        <TouchableOpacity
          onPress={() => openGallery()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./image/upload.png')}
            style={{width: 42, height: 42, marginBottom: 20}}
          />
          <Text style={{color: 'black'}}>Upload Pan card</Text>
        </TouchableOpacity>
        {galleryPhoto ? (
          <Image
            style={{width: 100, height: 100}}
            source={{uri: galleryPhoto}}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Imagepick;
