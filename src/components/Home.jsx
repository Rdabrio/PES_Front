import React from 'react'
import {Image, View, Text, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import SearchBar from './SearchBar'
import theme from '../theme.js'

const Home = () => {
  
    return (
        <><View style={styles.searchbar}>
            <SearchBar></SearchBar>
        </View><View>
                {/*he intentado usar el stylessheet sin exito*/}
                <Text style={styles.homeTitleText}>For You</Text>
                <ScrollView horizontal={true}>
                    {/*aqui deberia ser {{uri: props.Name}} donde name sera el campo de nusetros datos que contenga la imagen que queremos mostrar*/}
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.image} source={require('../../assets/Color_negro.jpg')}></Image>

                </ScrollView>
            </View></>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        width: '95%', // Define el espacio de ancho de la pantalla que ocupara
        marginTop: 0, //Posicion vertical elemento
    },
    image: {
        width: 120,
        height: 170,
        marginTop: 5,
        marginLeft:5,
        marginRight: 5,
        marginBottom: 10,
    },
    homeTitleText:{
        color: 'blue', 
        fontSize: 24, 
        fontFamily: 'FuenteDeTitulo', 
        fontWeight: 'bold', 
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
    }

})

export default Home