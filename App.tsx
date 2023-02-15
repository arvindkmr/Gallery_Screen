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
import Header from './components/Header';
import Card from './components/Card';
import Cardtwo from './components/Cardtwo';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles.mainBox}>
          <Card />
          <Cardtwo />
          <Footer/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#F9F9F9',
    margin: 16,
  },
});

export default App;
