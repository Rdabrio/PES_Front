import React from 'react'
import {StyleSheet, View} from 'react-native'
import StyledText from './StyledText'
import Navigator from './Navigator'

const MenuBar = () => {
    return (
        <View style={styles.container}>
            <Navigator iconUrl={require('../../assets/SocialIcon.png')} iconText='Social'></Navigator>
            <Navigator iconUrl={require('../../assets/MapIcon.png')} iconText='Map'></Navigator>
            <Navigator iconUrl={require('../../assets/HomeIcon.png')} iconText='Home'></Navigator>
            <Navigator iconUrl={require('../../assets/HeartIcon.png')} iconText='Favs'></Navigator>
            <Navigator iconUrl={require('../../assets/ProfileIcon.png')} iconText='Profile'></Navigator>
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