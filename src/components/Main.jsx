import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Switch, Route, Routes } from 'react-router-native'
import StyledText from './StyledText'
import MenuBar from './MenuBar'
import SignIn from './SignIn'
import Home from './Home'
import Map from './Map'
import Profile from './Profile'
import Favs from './Favs'
import Social from './Social'
import Register from './Register'

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='/' element={<SignIn />} exact/>
                <Route path='/register' element={<Register />} exact/>
                <Route path='/home' element={<Home />} exact/>
                <Route path='/map'  element={<Map />} exact/>                  
                <Route path='/profile'  element={<Profile />} exact/>    
                <Route path='/favs'  element={<Favs />} exact/>   
                <Route path='/social'  element={<Social />} exact/>
            </Routes>
            <MenuBar></MenuBar>
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

export default Main