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
          padding:2,
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
  
});

export default Input;
