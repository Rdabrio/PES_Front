import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40
    }
})

const ImageText = ({iconUrl, iconText}) => {
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