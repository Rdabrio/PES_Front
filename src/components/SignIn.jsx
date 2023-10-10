import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'
import Constants from 'expo-constants'
import ImageRow from './ImageRow'
import SignInButton from './SignInButton'


const SignIn = () => {

    const paths = {
        1:[require('../../assets/culturalevents/costdevida.jpeg'), require('../../assets/culturalevents/estacionsvivaldi.jpeg'),
        require('../../assets/culturalevents/lenguajes.jpeg'), require('../../assets/culturalevents/liberica.jpeg')],
        2:[require('../../assets/culturalevents/mamasita.jpeg'), require('../../assets/culturalevents/pinpang.jpeg'),
        require('../../assets/culturalevents/univers.jpeg'), require('../../assets/culturalevents/ximpanze.jpeg')],
        3:[require('../../assets/culturalevents/marrobruixes.jpeg'), require('../../assets/culturalevents/pellfina.jpeg'),
        require('../../assets/culturalevents/sonallum.jpeg'), require('../../assets/culturalevents/vegada.jpeg')]
    }

    
    
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <StyledText color='white' fontSize='title' fontWeight='bold'>COOLTURAL</StyledText>
                <StyledText color='white' fontSize='subheading' fontWeight='bold'>On la cultura i la tradició es troben a la teva mà</StyledText>
            </View>
            <View style={styles.imageContainer}>
                <ImageRow paths={paths[1]}></ImageRow>
                <ImageRow paths={paths[2]}></ImageRow>
                <ImageRow paths={paths[3]}></ImageRow>
            </View>
            <View style={styles.buttonsContainer}>
                <SignInButton text='your mail'></SignInButton>
                <SignInButton text='Google'></SignInButton>
                <SignInButton text='Github'></SignInButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    textContainer: {
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
        
    },
    imageContainer: {
        width: '100%',
        height: '45%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    buttonsContainer: {
        paddingBottom: 60,
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    }
    
})

export default SignIn