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
        </View><View style={styles.container}>
                <Text style={styles.homeTitleText}>For You</Text>
                <ScrollView style={styles.scroll} horizontal={true}>
                    {/*aqui deberia ser {{uri: props.Name}} donde name sera el campo de nusetros datos que contenga la imagen que queremos mostrar*/}
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageForYou} source={require('../../assets/Color_negro.jpg')}></Image>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.homeTitleText}>Cooltural recommends</Text>
                <ScrollView horizontal={true}>
                    {/*aqui deberia ser {{uri: props.Name}} donde name sera el campo de nusetros datos que contenga la imagen que queremos mostrar*/}
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                    <Image style={styles.imageRecommend} source={require('../../assets/Color_negro.jpg')}></Image>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        width: '95%', // Define el espacio de ancho de la pantalla que ocupara
        marginTop: 0, //Posicion vertical elemento
    },
    imageForYou: {
        width: 120,
        height: 170,
        marginTop: 5,
        marginLeft:5,
        marginRight: 5,
        marginBottom: 10,
    },
    imageRecommend: {
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
        fontWeight: 'bold', 
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
    },
    container: {
        height: '80%'
    },
    scroll: {
        flex: 1,
        height: 20
    }


})

export default Home