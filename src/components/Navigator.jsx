import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImageText from './ImageText'
import { Link } from 'react-router-native'

const NavigatorTab = ({active, to, iconUrl, iconText}) => {
    return (
        <Link to={to}>
            <ImageText iconUrl={iconUrl} iconText={iconText}></ImageText>
        </Link>
    ) 
}

const Navigator = ({iconUrl, to, iconText}) => {

    return (
        <View style={styles.container}>
            <NavigatorTab active to={to} iconUrl={iconUrl} iconText={iconText}></NavigatorTab>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Navigator