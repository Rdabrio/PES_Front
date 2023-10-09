import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'
import Constants from 'expo-constants'
import MenuBar from './MenuBar'
import SignInButton from './SignInButton'


const SignIn = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <StyledText color='white' fontSize='title' fontWeight='bold'>COOLTURAL</StyledText>
                <StyledText color='white' fontSize='subheading' fontWeight='bold'>On la cultura i la tradició es troben a la teva mà</StyledText>
            </View>
            <View style={styles.imageContainer}></View>
            <View>
                <SignInButton text='your mail'></SignInButton>
                <SignInButton text='Google'></SignInButton>
                <SignInButton text='Github'></SignInButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background.primary,
        width: '100%',
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    textContainer: {
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        backgroundColor: '#ffffff'
    },
    
})

export default SignIn