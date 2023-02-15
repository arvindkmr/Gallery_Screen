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

const Input = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={{
          backgroundColor: 'white',
          color: '#A3A3A3',
          fontFamily: 'Barlow',
          fontWeight: '500',

          fontSize: 15,
          borderBottomWidth:1,
          borderColor:'#EBEBEB',
        }}
        placeholder="PAN Number"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
  },
  dropdownBox: {
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 15,
    color: '#3D3D3D',
    fontWeight: '800',
    fontFamily: 'Barlow',
  },
  mainBox: {
    backgroundColor: '#F9F9F9',
    margin: 16,
  },
  imageBox: {
    height: 24,
    width: 24,
  },
  header: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default Input;
