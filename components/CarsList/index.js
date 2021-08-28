import React from 'react';
import {View,Text, ImageBackground, FlatList} from 'react-native';
import styles from './styles';
import CarItem from '../car';
import cars from './cars';

const CarsList = (props) => {

    console.log(cars);

    return (
    <View style ={styles.container}>
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item} /> } 
        />
    </View>    
    );
};

export default CarsList;

