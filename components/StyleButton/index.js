import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const StyleButton = (props) => {
    return (
    <View style = {styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress ={() => { 
                console.warn(  data, 'Hey there');
            }}
            >   
            <Text style={styles.buttonText}> Custom Order</Text>
        </TouchableOpacity>
        
      
    </View>    
    );
};

export default StyleButton;
