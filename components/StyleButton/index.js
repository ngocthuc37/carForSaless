import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const StyleButton = (props) => {

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
    <View style = {styles.container}>
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress ={() => onPress()  
                //console.warn(data, 'Hey there');
            }
            >   
            <Text style={[styles.buttonText, {color: textColor}]}> {content}</Text>
        </TouchableOpacity>
    </View>    
    );
};

export default StyleButton;
