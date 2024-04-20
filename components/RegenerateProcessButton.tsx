import * as React from 'react';
import { TouchableOpacity , Image, View, Text, Dimensions, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { isValidElement } from 'react';


interface RegenerateProcessButtonProps {
    text: string;
    background?: string;
    style?: StyleProp<ViewStyle>;
    textcolor: string;
    onClick?: () => void;
  }


export default function RegenerateProcessButton({text, background = "white", style, textcolor, onClick}: RegenerateProcessButtonProps) {

    const defaultStyles = StyleSheet.create({
        container:{
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: 349,
        height: 40, 
        backgroundColor: background
        }
      }).container;

    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <View style={[defaultStyles, style]}>
                <Text style= {{color: textcolor, fontSize: 14}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    image: {
        width: 30, 
        height: 30, 
        borderRadius: 5,
        marginRight: 5,
    }
})


  

  