import React from 'react'
import {View, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import StyledText from './StyledText'
import { Link } from 'react-router-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IonIcons from '@expo/vector-icons/Ionicons'

const Register = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'black',width:'100%'}}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <StyledText fontSize='title' fontWeight='bold' color='white' >Register</StyledText>
                </View>

                <View style={styles.formContainer}>
                    <MaterialIcons name='person' size={20} color="#666" style={{marginRight: 5, paddingTop: 3}}/>
                    <TextInput placeholder='Name' color='white' placeholderTextColor={'white'}
                            style={{flex: 1, paddingVertical: 0}}
                            keyboardType='email-address'> 
                    </TextInput>
                </View>

                <View style={styles.formContainer}>
                    <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight: 5, paddingTop: 3}}/>
                    <TextInput placeholder='Email ID' color='white' placeholderTextColor={'white'}
                            style={{flex: 1, paddingVertical: 0}}
                            keyboardType='email-address'> 
                    </TextInput>
                </View>

                <View style={styles.formContainer}>
                    <IonIcons name='lock-closed' size={20} color="#666" style={{marginRight: 5, paddingTop: 3}}/>
                    <TextInput placeholder='Password' color='white' placeholderTextColor={'white'}
                            style={{flex: 1, paddingVertical: 0}}
                            secureTextEntry={true}> 
                    </TextInput>
                </View>

                <View style={styles.formContainer}>
                    <TextInput placeholder='Repeat password' color='white' placeholderTextColor={'white'}
                            style={{flex: 1, paddingVertical: 0, marginTop: 10}}
                            secureTextEntry={true}> 
                    </TextInput>
                </View>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.signupTouchable}>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.linkContainer}>
                    <StyledText  color='white'>Ja estàs registrat? </StyledText>
                    <Link to='/'>
                        <StyledText  color= 'white'>Inicia Sessió</StyledText>
                    </Link>

                    <StyledText marginTop='5%' color='white'>o... </StyledText>

                    <View style={styles.BottomTouchables}>
                        <TouchableOpacity style={styles.svgTouchable} onPress={() => {}}>
                            <Image style={{height: 28, width: 28}} source={require('../../assets/google.png')} />
                            <StyledText color='white' alignSelf='center' paddingLeft={10}>Sign Up with Google</StyledText>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.svgTouchable} onPress={() => {}}>
                            <Image style={{height: 28, width: 28}} source={require('../../assets/github.png')} />
                            <StyledText color='white' alignSelf='center' paddingLeft={10}>Sign Up with Github</StyledText>
                        </TouchableOpacity>
                    </View>



            </View>
                
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        top: '20%',
        paddingLeft: 5
    },

    textContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },

    formContainer: {
        width: '95%',
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 2
    },
    signupTouchable: {
        width: '90%',
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center',
        alignItems: 'center'
    },

    svgTouchable: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 100,
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: '70%',
        flexDirection: 'row',
        marginTop: 10
    },

    linkContainer: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center'
        
    },
    BottomTouchables:{
        width: '95%',
        marginTop: 20,
    }
})

export default Register