import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { Formik, Field } from 'formik';
import DatePicker from 'react-native-date-picker'

import Time from '../../components/icons/homeIcons/Time'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SuccessScreen = ({ navigation,route }: any) => {

    const date = route.params


    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>Allow notifications to show</Text>
                <Time />

            </View>
            <View style={styles.inputsContainer}>

                <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 14, lineHeight: 30 }}>Your application was successful
                    We will wait for you on {date}</Text>



                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>

                    <View style={styles.button}>

                        <Text style={styles.buttonText} >Go To Home Page</Text>

                    </View>

                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '12%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
        gap: 20,
    },
    headerContainer: {
        gap: 8,
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLogo: {
        resizeMode: 'contain',
        height: windowHeight / 6
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        paddingHorizontal: 70,
        fontWeight: '500',
        color: 'black',
        marginBottom: '16%'
    },
    headerDetailsText: {
        fontSize: 16,
        color: 'black'
    },

    inputsContainer: {
        gap: 10

    },
    inputMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 4,
        paddingHorizontal: 15,
        gap: 5
    },
    inputHeaderText: {

        color: 'black',
        fontWeight: '500',

    },
    dateContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    },

    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#9088C2',
        width: windowWidth / 1.12,
        height: windowHeight / 15,
        borderRadius: 4,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '1%',

    },
    privacyText: {
        marginBottom: '20%',
        marginTop: '2%',
        fontSize: 14
    },
    buttonText: {
        color: 'white',
        fontWeight: '700'
    },
    checkbox: {
        margin: 4,
    },
    registerNav: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 14,
        color: 'black'
    },

})