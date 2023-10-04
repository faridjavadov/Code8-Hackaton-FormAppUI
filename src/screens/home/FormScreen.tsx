import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { handleLogin } from '../../redux/slicers/StatusSlice';
import { Formik, Field } from 'formik';
import * as yup from 'yup'; // Import yup for validation
import MailIcon from '../../components/icons/authIcons/MailIcon'
import PasswordIcon from '../../components/icons/authIcons/PasswordIcon'
import Linkedin from '../../components/icons/authIcons/Linkedin'
import Facebook from '../../components/icons/authIcons/Facebook'
import Gmail from '../../components/icons/authIcons/Gmail'
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const FormSreen = ({ navigation }: any) => {

    const [deviceID, setdeviceID] = useState('')
    useEffect(() => {

        setDeviceId()


    }, [])
    const setDeviceId = async () => {
        const deviceId = await DeviceInfo.getDeviceId();
        console.log(deviceId);
        setdeviceID(deviceId)

    }



    const handleSubmit = (values: any) => {
        const item = {
            deviceId: deviceID,
            university: values.university,
            university_section: values.university_section,
            grade_level: values.grade_level,
            gpa: values.gpa,
            enjoyed_subject: values.enjoyed_subject,
            hobbies: values.hobbies

        }

        navigation.navigate("DateScreen", item)



    };

    const dispatch = useDispatch<AppDispatch>();
    const [isVisible, setisVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>Enter your information</Text>

            </View>
            <View style={styles.inputsContainer}>
                <Formik
                    initialValues={{ university: '', university_section: '', grade_level: '', gpa: '', enjoyed_subject: '', hobbies: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.inputsContainer}>



                            <Text style={styles.inputHeaderText}>University</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('university')}
                                    onBlur={handleBlur('university')}
                                    style={styles.inputContainer}
                                    placeholder="Your university"
                                    value={values.university}
                                />

                            </View>



                            <Text style={styles.inputHeaderText}>University section</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('university_section')}
                                    onBlur={handleBlur('university_section')}
                                    style={styles.inputContainer}
                                    placeholder="Your university section"
                                    value={values.university_section}
                                />


                            </View>




                            <Text style={styles.inputHeaderText}>Grade Level</Text>
                            <View style={styles.inputMainContainer}>

                                <TextInput
                                    onChangeText={handleChange('grade_level')}
                                    onBlur={handleBlur('grade_level')}
                                    style={styles.inputContainer}
                                    placeholder="Your Grade Level"
                                    value={values.grade_level}
                                />


                            </View>


                            <Text style={styles.inputHeaderText}>GPA</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('gpa')}
                                    secureTextEntry={!isVisible}
                                    placeholder={"Your GPA"}
                                    onBlur={handleBlur('gpa')}
                                    style={styles.inputContainer}
                                    value={values.gpa}
                                />

                            </View>

                            <Text style={styles.inputHeaderText}>Enjoyed subject</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('enjoyed_subject')}
                                    secureTextEntry={!isVisible}
                                    placeholder={"Your enjoyed subject"}
                                    onBlur={handleBlur('enjoyed_subject')}
                                    style={styles.inputContainer}
                                    value={values.enjoyed_subject}
                                />

                            </View>

                            <Text style={styles.inputHeaderText}>Hobbies</Text>

                            <View style={[styles.inputMainContainer, { marginBottom: '5%' }]}>
                                <TextInput
                                    onChangeText={handleChange('hobbies')}
                                    secureTextEntry={!isVisible}
                                    placeholder={"Your hobbies"}
                                    onBlur={handleBlur('hobbies')}
                                    style={styles.inputContainer}
                                    value={values.hobbies}
                                />

                            </View>



                            <TouchableOpacity onPress={() => handleSubmit()}>

                                <View style={styles.button}>

                                    <Text style={styles.buttonText} >Confirm</Text>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()}>

                                <View style={[styles.button, { marginBottom: '20%', backgroundColor: 'white', borderColor: '#8780B6', borderWidth: 1, }]}>

                                    <Text style={[styles.buttonText, { color: '#8780B6' }]} >Cancel</Text>

                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}

export default FormSreen

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
        marginBottom: '5%'
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
        color: '#8780B6'
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
    inputContainer: {
        width: '100%',
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