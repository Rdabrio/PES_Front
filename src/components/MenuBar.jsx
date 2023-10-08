import React from 'react'
import {StyleSheet, View} from 'react-native'
import StyledText from './StyledText'
import Navigator from './Navigator'

const MenuBar = () => {
    return (
        <View style={styles.container}>
            <Navigator iconUrl={require('../../assets/SocialIcon.png')} to='/social' iconText='Social'></Navigator>
            <Navigator iconUrl={require('../../assets/MapIcon.png')} to='/map' iconText='Map'></Navigator>
            <Navigator iconUrl={require('../../assets/HomeIcon.png')} to='/' iconText='Home'></Navigator>
            <Navigator iconUrl={require('../../assets/HeartIcon.png')} to='/favs' iconText='Favs'></Navigator>
            <Navigator iconUrl={require('../../assets/ProfileIcon.png')} to='/profile' iconText='Profile'></Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        backgroundColor: '#27487d',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default MenuBar