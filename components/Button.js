import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
} from 'react-native';

const Contiuebutton = () => {
  const onPressFunction = () => {
    console.log('All good!!');
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onPressFunction}
        style={{
          backgroundColor: '#4CBD01',
          elevation: 3,
          borderRadius: 5,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Barlow',
              fontWeight: '600',
              marginBottom: 3,
              fontSize: 18,
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            Continue{' '}
          </Text>
          <Image source={require('./image/continue.png')} style={{width:12,height:15}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contiuebutton;
