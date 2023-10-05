import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'

const Navigator = ({iconUrl, iconText}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={iconUrl} resizeMode='contain'></Image>
            <StyledText color='white'>{iconText}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    image: {
        width: 40,
        height: 40
    }
})

export default Navigator