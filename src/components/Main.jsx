import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Hello world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})

export default Main