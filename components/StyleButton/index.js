import React from 'react';
import {View,Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {
    return (
    <View style = {styles.container}>
        <Pressable 
            style={styles.button}
            onPress ={() => { 
                console.warn(   data, 'Hey there');
            }}
            >
            <Text style={styles.buttonText}> Custom Order</Text>
        </Pressable>
        
      
    </View>    
    );
};

export default StyleButton;
