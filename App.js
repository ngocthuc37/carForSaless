import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, ImageBackground } from 'react-native';
import CarItem from './components/car';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name ={"Model X"} 
        tagline={"Order Online For "} 
        taglineCTA = {"Touchless Delivery"}
        image = {require('./assets/images/ModelX.jpeg')}
      />
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
  
});
