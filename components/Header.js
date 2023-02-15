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
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.backButton}>
        <TouchableOpacity >
          <Image source={require('./image/back.png')} style={styles.imageBox} />
        </TouchableOpacity>
      </View>
        <View style={styles.titleText}>
        <Text style={styles.headerText}>Car Insurance</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  titleText:{
    // backgroundColor:'blue',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    width:'60%',
    },
    backButton:{
    width:'35%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    // backgroundColor:'black'
  },
    headerText: {
      fontSize: 15,
      color: '#3D3D3D',
      fontWeight: '800',
      fontFamily: 'Barlow',
    },
    imageBox: {
      height: 12,
      width: 14,
    },
    header: {
      height: 54,
      width:'100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white',
      shadowColor: '#171717',
      elevation:3,
    },
  });
export default Header;