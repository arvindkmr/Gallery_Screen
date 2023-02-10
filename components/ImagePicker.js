import {Text, TouchableOpacity, View, PermissionsAndroid,Image} from 'react-native';
import React, {Component, useState} from 'react';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
const Imagepick = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
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
const openGallery = async()=>{
	const result= await launchImageLibrary(options)
	setGalleryPhoto(result.assets[0].uri);
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => openCamera()}>
        <Text>Open camera</Text>
      </TouchableOpacity>
      <Image   style={{width:100,height:100}} source={{uri: cameraPhoto}}/>
      <TouchableOpacity onPress={() => openGallery()}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
      <Image  style={{width:100,height:100}} source={{uri: galleryPhoto }}/>
    </View>
  );
};

export default Imagepick;
