import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Dropbox from './Dropbox';
import Input from './Input';
import Imagepick from './ImagePicker';

const Cardtwo = () => {
  return (
    <ScrollView>
      <View style={styles.mainBox}>
        <Dropbox/>
        <Input/>
        <Imagepick/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 17,
    borderRadius: 7,
    borderColor: '#EBEBEB',
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 1.0,
    borderWidth:2,
  },
});
export default Cardtwo;
