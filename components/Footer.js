import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import Contiuebutton from './Button';

const Footer = () => {
  return (
    <ScrollView style={{marginTop: 10,marginBottom:90,}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}>
        <View style={{marginRight: 5}}>
          <Image
            source={require('./image/icon.png')}
            style={{width: 14, height: 14, marginBottom: 3}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#494949',
              fontFamily: 'Barlow',
              fontWeight: '400',
              marginBottom: 3,
              fontSize: 12,
            }}>
            Your motor policy will be processed using the same name which will
            be fetched by KYC
          </Text>
        </View>
      </View>
      <View>
        <Contiuebutton />
      </View>
    </ScrollView>
  );
};

export default Footer;
