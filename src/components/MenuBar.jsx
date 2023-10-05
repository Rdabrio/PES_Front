import React from 'react'
import {StyleSheet, View} from 'react-native'
import StyledText from './StyledText'

const MenuBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontSize='subheading'>MenuBar</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        backgroundColor: 'grey',
    }
})

export default MenuBar