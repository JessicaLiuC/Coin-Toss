import * as React from 'react';
import { TouchableOpacity , Image, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Heart from '@/assets/dist/Heart';


interface IconButtonProps {
    fill: string;
    size?: number;
    background?: string;
    onClick?: () => void;
  }

export default function FavoriteButton({fill, size=40, background = "white", onClick}: IconButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <View style={[styles.container, {width: size, height: size, backgroundColor: background, borderRadius: 25}]}>
                <Heart fill={fill}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10
    },
    container: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    image: {
        borderRadius: 5
    }
})


  

  