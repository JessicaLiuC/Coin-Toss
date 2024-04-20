import * as React from 'react';
import { TouchableOpacity , Image, View, Text, Dimensions, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import NavigationArrow from '@/assets/dist/NavigationArrow.js';
import { isValidElement } from 'react';


interface IconTextButtonProps {
    text: string;
    background?: string;
    style?: StyleProp<ViewStyle>;
    textcolor: string;
    onClick?: () => void;
  }


export default function CointTossButton({text, background = "white", style, textcolor, onClick}: IconTextButtonProps) {
    const [buttonWidth, setButtonWidth] = React.useState(150);

    const measureText = (event: any) => {
        const { width } = event.nativeEvent.layout;
        const maxWidth = Dimensions.get('window').width;
        const newWidth = Math.min(width + 60, maxWidth);
        setButtonWidth(newWidth);
    };

    const defaultStyles = StyleSheet.create({
        container:{
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: buttonWidth,
        height: 40, 
        backgroundColor: background
        }
      }).container;

    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <View style={[defaultStyles, style]}>
                <NavigationArrow fill="white"/>
                <Text 
                    onLayout={measureText}
                    style= {{color: textcolor, fontSize: 14}}>{text}</Text>
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


  

  