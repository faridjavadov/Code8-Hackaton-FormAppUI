import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { Formik, Field } from 'formik';
import DatePicker from 'react-native-date-picker'

import Time from '../../components/icons/homeIcons/Time'
import Appeal from '../../components/items/home/Appeal';
import { appeals } from '../../data/Appeals';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const renderItem = ({ item }: any) => {
    return (
        <Appeal item={item} />
    )
}


const ApplicationScreen = ({ navigation, route }: any) => {

    const {data} = useSelector((state:StateType)=>state.AppealSlice)


    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>My appeals</Text>

            </View>

            <View style={styles.listContainer}>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => { return (<View style={{ height: 20 }} />) }}
                    showsVerticalScrollIndicator={false}
                />

            </View>

        </View>
    )
}

export default ApplicationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '6%',
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
        color: '#8780B6',
    },
    listContainer: {
        height: '88%'

    },



})