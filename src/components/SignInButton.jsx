import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import StyledText from './StyledText'


const SignInButton = ({text, url}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <StyledText color='black' fontSize='subheading'>Sign in with {text}</StyledText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        width: Dimensions.get("window").width*0.8,
        height: Dimensions.get("window").width*0.8*0.15,
        justifyContent: 'center',
    },
})

export default SignInButton
