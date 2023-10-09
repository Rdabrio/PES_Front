import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'

const Home = () => {
    return (
        <View style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>Home view</StyledText>
            <Text>Hola</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    isplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
})

export default Home