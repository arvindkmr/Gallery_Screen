import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const Card = () => {
  const [dataApis, setDataApis] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      res.json().then(apiData => setDataApis(apiData));
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.mainBox}>
        <View>
          <Image
            source={require('./image/logo.png')}
            style={{width: 80, height: 40, marginBottom: 3}}
          />
          <Text
            style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '700',
              marginBottom: 3,
              fontSize:11,
            }}>
            IDV: ₹ 2,36,094
          </Text>
          <Text
            style={{
              color: '#AAAAAA',
              fontFamily: 'Barlow',
              fontWeight: '500',
              marginBottom: 3,
              fontSize:11,
            }}>
            Enquiry# SMC/ENQ/759297
          </Text>
        </View>
        <View>
          <Text style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '500',
              marginBottom: 3,
              fontSize:11,
            }}>Premium</Text>
          <Text  style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '500',
              marginBottom: 3,
              fontSize:11,
            }}>Paid Driver</Text>
          <Text  style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '700',
              marginBottom: 3,
              fontSize:11,
            }}>API DATA</Text>
          <View style={styles.apiBox}>
              {dataApis?.slice(0, 5).map((item, key) => {
                return (
                  <View key={key}>
                    <Text  style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '500',
              marginBottom: 3,
              fontSize:11,
            }}>{item.username}</Text>
                  </View>
                );
              })}
            </View>
          <Text  style={{
            color: '#3D3D3D',
            fontFamily: 'Barlow',
            fontWeight: '500',
            marginBottom: 3,
            fontSize:11,
          }}>+ GST (18%)</Text>
          <Text style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '700',
              marginBottom: 3,
              fontSize:11,
            }}>Total</Text>
        </View>
        <View>
          
        <Text style={{
              color: '#3D3D3D',
              fontFamily: 'Barlow',
              fontWeight: '500',
              marginBottom: 3,
              fontSize:11,
            }}>$ 5000</Text>
            <Text style={{
                color: '#3D3D3D',
                fontFamily: 'Barlow',
                fontWeight: '500',
                marginBottom: 3,
                fontSize:11,
              }}> $ 50</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 17,
    borderRadius: 7,
    borderColor: '#EBEBEB',
    elevation: 3,
    borderWidth:2,
    shadowRadius: 3,
    shadowOpacity: 1.0,
    // shadowColor: '#0000000A',
  },
});
export default Card;
