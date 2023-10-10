import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

const ImageRow = ({paths}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={paths[0]} resizeMode='cover'></Image>
            <Image style={styles.image} source={paths[1]} resizeMode='cover'></Image>
            <Image style={styles.image} source={paths[2]} resizeMode='cover'></Image>
            <Image style={styles.image} source={paths[3]} resizeMode='cover'></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    image: {
        width: 90,
        height: 110,
        borderRadius: 5
    }
})

export default ImageRow

