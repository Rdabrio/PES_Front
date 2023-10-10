import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const ImageText = ({iconUrl, iconText, inButton}) => {
    if (inButton) {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={iconUrl} resizeMode='contain'></Image>
                <StyledText color='white'>
                    {iconText}
                </StyledText>
            </View>
        )
    }
    return (
        <View>
            <Image style={styles.image} source={iconUrl} resizeMode='contain'></Image>
            <StyledText color='white'>
                {iconText}
            </StyledText>
        </View>
    )
    
}

export default ImageText