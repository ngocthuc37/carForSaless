import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <View style ={styles.carContainer}>

          <ImageBackground source={require('./assets/images/ModelX.jpeg')} style = {styles.image} />
            <View style={styles.titles}>
              <Text style={styles.title}>Model S</Text>
              <Text style={styles.subtitle}> Giá khởi điểm: 200.000 $</Text>
            </View>
        </View>      


      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: "30%",
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '800',

  }, 
  subtitle:{
    fontSize: 16,
    color: '#5c5e62',

  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
