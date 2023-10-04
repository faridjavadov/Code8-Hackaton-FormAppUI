import { StyleSheet, Text, View,TouchableOpacity,Dimensions, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { handleLogin } from '../../redux/slicers/StatusSlice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnBoardScreen = ({navigation}:any) => {


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What categories are  <Text>you interested in?</Text> </Text>
            <Text style={styles.header2Text}>Choose no less than 3 categories</Text>

            <Image style={{width:340,height:360,marginBottom:'20%'}} source={require('../../assets/images/Categories.png')}/>

            <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>

                <View style={styles.button}>

                    <Text style={styles.buttonText} >Get Started</Text>

                </View>

            </TouchableOpacity>
        </View>
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '12%',
        paddingHorizontal: '10%',
        backgroundColor: 'white',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 30,
        color: 'black',
        fontWeight: '400',
        alignItems: 'center',
        textAlign: 'center'

    },
    header2Text: {
        fontSize: 18
    },
    button: {
        backgroundColor: '#9088C2',
        width: windowWidth / 1.1,
        height: windowHeight / 15,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%',

    },
    buttonText: {
        color: 'white',
        fontWeight: '700'
    },
})