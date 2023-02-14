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
import Imagepick from './components/ImagePicker'
const dummyData = [
  {label: 'Pan Card', value: 'Pan card'},
  {label: 'Addhar card', value: 'Addhar card'},
  {label: 'something else', value: 'something else'},
];

function App(): JSX.Element {
  const [dataApis, setDataApis] = useState([]);
  const [value, setValue] = useState(null);
  const [text, setText] = useState('');


  const onPressFunction= ()=>{
    console.log("All good!!")
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      res.json().then(apiData => setDataApis(apiData));
    });
  }, []);


  return (
    <SafeAreaView style={{height: '100%', flex: 1, backgroundColor:'#80808050'}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./arrow.png')} style={styles.imageBox} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Car Insurance</Text>
        </View >
      <View style={styles.mainBox}>
        <View style={styles.dropdownBox}>
          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown]}
              data={dummyData}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={{height: 40, backgroundColor: 'white'}}
            placeholder="PAN CARD"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </View>
        <View style={styles.apiBox}>
          {dataApis?.slice(0, 5).map((item, key) => {
            return (
              <View key={key}>
                <Text style={{fontSize: 24}}>{item.username}</Text>
              </View>
            );
          })}
        </View>

        <View>
          <TouchableOpacity onPress={onPressFunction} style={{backgroundColor:'green'}}>
            <Text style={{textAlign:'center'}}>Continue!</Text>
          </TouchableOpacity>
        </View>
          <Imagepick/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputBox: {},
  apiBox: {},
  dropdownBox: {
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 24,
  },
  mainBox: {
    backgroundColor: '#80808050',
    height: '100%',
    margin:16,
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
    backgroundColor:'white'
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

export default App;
