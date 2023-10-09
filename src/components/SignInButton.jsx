import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import StyledText from './StyledText'


const SignInButton = ({text}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <StyledText color='primary'>Sign in with {text}</StyledText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
      },
})

export default SignInButton
