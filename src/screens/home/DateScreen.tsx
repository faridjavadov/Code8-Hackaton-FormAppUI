import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { Formik, Field } from 'formik';
import DatePicker from 'react-native-date-picker'

import Time from '../../components/icons/homeIcons/Time'
import { handleAppeal } from '../../redux/slicers/AppealSlice';
import axios from 'axios';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const DateScreen = ({ navigation,route }: any) => {

    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [open, setOpenDate] = useState(false)
    const [openT, setOpenTime] = useState(false)
    const item = route.params
    const {data} = useSelector((state:StateType)=>state.AppealSlice)
    const dispatch = useDispatch<AppDispatch>();
    const stringDate = date.toDateString();
    const stringTime = date.toTimeString();

    const addAppeal = () =>{
        const obj ={
            id:data.length+1,
            title:'UI/UX Design ',
            deviceId: item.deviceID,
            universityName:item.university,
            speciality:item.university_section,
            currentGradeLevel:item.grade_level,
            gpa:Number(item.gpa),
            careerEnvision:'',
            enjoyedSubjects:item.enjoyed_subject,
            hobbies:item.hobbies,
            date:stringDate,
            time:stringTime,
            isAccepted:true,
        }
        dispatch(handleAppeal(obj))

        // axios.post('http://20.199.64.247:5000/api/Student/JoinCourse',obj).then((response)=>{
        //     console.log(response.data);
            
        // })
        navigation.navigate("SuccessScreen",date.toString())
        
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>Selected Date</Text>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',gap:10}}>

                    <View style={{padding:'4%',justifyContent:'center',alignItems:'center',borderColor:"#5BB98C",borderRadius:4,borderWidth:1}}>

                        <Text style={{color:"#5BB98C",}}>90%</Text>
                        <Text style={{color:"#5BB98C",}}>UI/UX Design</Text>
                    </View>
                    
                    <View style={{padding:'4%',justifyContent:'center',alignItems:'center',borderColor:'#E5484B',borderRadius:4,borderWidth:1}}>

                        <Text style={{color:'#E5484B'}}>8%</Text>
                        <Text style={{color:'#E5484B'}}>Graphic Design</Text>
                    </View>
                    
                    <View style={{padding:'4%',justifyContent:'center',alignItems:'center',borderColor:"#EB9091",borderRadius:4,borderWidth:1}}>

                        <Text style={{color:'#EB9091'}}>2%</Text>
                        <Text style={{color:'#EB9091'}}>Backend</Text>
                    </View>


                </View>
            </View>
            <View style={styles.inputsContainer}>


                <View style={styles.inputsContainer}>
                    <Text style={styles.inputHeaderText}>Choose a meeting date</Text>

                    <View style={styles.inputMainContainer}>
                        <TouchableOpacity style={styles.dateContainer} onPress={() => setOpenDate(true)}>

                            <Text>{date.toDateString()}</Text>

                        </TouchableOpacity>

                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode='date'
                            onConfirm={(date) => {
                                setOpenDate(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpenDate(false)
                            }}
                        />
                    </View>

                    <Text style={styles.inputHeaderText}>Choose a meeting time</Text>

                    <View style={[styles.inputMainContainer, { marginBottom: '5%' }]}>

                        <TouchableOpacity style={styles.dateContainer} onPress={() => setOpenTime(true)}>

                            <Text>{date.toTimeString()}</Text>

                        </TouchableOpacity>

                        <DatePicker
                            modal
                            mode='time'
                            open={openT}
                            date={time}
                            onConfirm={(date) => {
                                setOpenTime(false)
                                setTime(date)
                            }}
                            onCancel={() => {
                                setOpenTime(false)
                            }}
                        />
                    </View>



                    <TouchableOpacity onPress={addAppeal}>

                        <View style={styles.button}>

                            <Text style={styles.buttonText} >Confirm</Text>

                        </View>

                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    )
}

export default DateScreen

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
        paddingHorizontal: 100,
        fontWeight: '500',
        color: '#8780B6',
        marginBottom: '16    %'
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