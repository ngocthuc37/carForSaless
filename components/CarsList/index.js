import React from 'react';
import {View,Text, Dimensions, FlatList} from 'react-native';

import styles from './styles';
import CarItem from "../car";
import cars from './cars';

const CarsList = (props) => {

    

    return (
    <View style={styles.container}>
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
    </View>    
    );
};

export default CarsList;

