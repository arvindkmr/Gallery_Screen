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
  ScrollView,
} from 'react-native';
import dummyData from '../Data/data';

const Dropbox = () => {
  const [value, setValue] = useState(null);
  return (
    <View style={styles.dropdownBox}>
      <View style={styles.container}>
      <Text
          style={{
            color: '#3D3D3D',
            fontFamily: 'Barlow',
            fontWeight: '700',
            marginBottom: 14,
            fontSize: 18,
          }}>
          KYC Details
        </Text>
      <Text
          style={{
            color: '#A3A3A3',
            fontFamily: 'Barlow',
            fontWeight: '400',
            
            fontSize: 10,
          }}>
          Select Document
        </Text>
        <Dropdown
          style={styles.dropdown}
          data={dummyData}
          labelField="label"
          valueField="value"
          placeholder={'PAN CARD'}
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <Text
          style={{
            color: '#A3A3A3',
            fontFamily: 'Barlow',
            fontWeight: '400',
            fontSize: 10,
            marginBottom:8
          }}>
          You can select another document if you have don't have PAN card
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownBox: {
    backgroundColor: 'blue',
    marginBottom:20
  },
  container: {
    backgroundColor: 'white',
  },
  dropdown: {
    // height: 26,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#3D3D3D',
    fontFamily: 'Barlow',
    fontWeight: '600',
    fontSize: 18,
  },
});
export default Dropbox;
