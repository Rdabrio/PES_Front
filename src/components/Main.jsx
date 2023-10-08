import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import MenuBar from './MenuBar'
import { Switch, Route, Routes } from 'react-router-native'

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='/' element={<StyledText fontSize='subheading' fontWeight='bold'>Home view</StyledText>} exact>
                </Route>
                <Route path='/map'  element={<StyledText fontSize='subheading' fontWeight='bold'>Map view</StyledText>} exact>
                    
                </Route>
                <Route path='/profile'  element={<StyledText fontSize='subheading' fontWeight='bold'>Profile view</StyledText>} exact>
                    
                </Route>
                <Route path='/favs'  element={<StyledText fontSize='subheading' fontWeight='bold'>Favs view</StyledText>} exact>
                    
                </Route>
                <Route path='/social'  element={<StyledText fontSize='subheading' fontWeight='bold'>Social view</StyledText>} exact>
                    
                </Route>
            </Routes>
            <MenuBar></MenuBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Main