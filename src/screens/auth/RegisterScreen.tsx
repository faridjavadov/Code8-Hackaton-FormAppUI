import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
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
import { handleLastName, handleName } from '../../redux/slicers/UserSlice';
import axios from 'axios'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const RegisterScreen = ({ navigation }: any) => {

    const [deviceID, setdeviceID] = useState('')
    useEffect(() => {

        setDeviceId()


    }, [])
    const setDeviceId = async () => {
        const deviceId = await DeviceInfo.getDeviceId();
        console.log(deviceId);
        setdeviceID(deviceId)
    
    }


    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });


    const handleSubmit = (values: any) => {
        
        dispatch(handleLogin(true))
        const item = {
            firstname:values.firstname,
            lastname:values.lastname,
            email:values.email,
            password:values.password,
            deviceId:deviceID
        }
        axios.post('http://20.199.64.247:5000/api/Student/DeviceRegister',item).then((response)=>{
            console.log(response.data);
            


        })
        dispatch(handleName(values.firstname))
        
    };


    const dispatch = useDispatch<AppDispatch>();
    const [isVisible, setisVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>Sign Up</Text>

            </View>
            <View style={styles.inputsContainer}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ email: '', password: '', firstname: '', lastname: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.inputsContainer}>

                            <Text style={styles.inputHeaderText}>First Name</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('firstname')}
                                    onBlur={handleBlur('firstname')}
                                    style={styles.inputContainer}
                                    placeholder="Your First Name"
                                    value={values.firstname}
                                />

                            </View>


                            <Text style={styles.inputHeaderText}>Last Name</Text>

                            <View style={styles.inputMainContainer}>
                                <TextInput
                                    onChangeText={handleChange('lastname')}
                                    onBlur={handleBlur('lastname')}
                                    style={styles.inputContainer}
                                    placeholder="Your Last Name"
                                    value={values.lastname}
                                />


                            </View>




                            <Text style={styles.inputHeaderText}>E-mail</Text>
                            <View style={styles.inputMainContainer}>

                                <MailIcon />
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={styles.inputContainer}
                                    placeholder="Your Email"
                                    value={values.email}
                                />


                            </View>


                            <Text style={styles.inputHeaderText}>Password</Text>

                            <View style={styles.inputMainContainer}>
                                <PasswordIcon />
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={!isVisible}
                                    placeholder={"Your Password"}
                                    onBlur={handleBlur('email')}
                                    style={styles.inputContainer}
                                    value={values.password}
                                />

                            </View>

                            <Text style={styles.privacyText}>By signing up you agree to our <Text style={{ color: 'black', fontWeight: '500' }}>Terms & Condition</Text> and <Text style={{ color: 'black', fontWeight: '500' }}>Privacy Policy.*</Text> </Text>


                            <TouchableOpacity onPress={() => handleSubmit()}>

                                <View style={styles.button}>

                                    <Text style={styles.buttonText} >Continue</Text>

                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>



            <View style={styles.registerNav}>
                <Text style={styles.footerText}>Already Have an Account?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>

                    <Text style={[styles.footerText, { fontWeight: '600', color: '#2805FF' }]}>Login</Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RegisterScreen

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
        fontSize: 28,
        fontWeight: '500',
        color: 'black'
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
        width: windowWidth / 1.1,
        height: windowHeight / 15,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%',

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