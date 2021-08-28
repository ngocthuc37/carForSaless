import React from 'react';
import {View,Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyleButton from '../StyleButton';

const CarItem = (props) => {
    return (
    <View style ={styles.carContainer}>

      <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style = {styles.image} 
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}> Giá khởi điểm: 200.000 $</Text>
      </View>

      <StyleButton
        type = "primary" 
        content = {"Custom Order"} 
        onPress ={() =>  {
          console.warn("Customer Order was pressed");
      }}
      />

      <StyleButton
        type = "secondary" 
        content ={"Existing Inventory"} 
        onPress ={() =>  {
          console.warn("Existing Inventory was pressed");
      }}
      />

    </View>    
    );
};

export default CarItem;

