import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import MenuBar from './MenuBar'

const Main = () => {
    return (
        <View style={styles.container}>
            <View>
                <StyledText fontSize='subheading' fontWeight='bold'>Hello world!</StyledText>
                <StyledText fontSize='subheading'>Prueba</StyledText>
            </View>
            <MenuBar></MenuBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Main