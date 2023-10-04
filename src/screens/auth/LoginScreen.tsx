import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState,useEffect } from 'react'
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
import Checkbox from 'react-native-check-box'
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { handleName } from '../../redux/slicers/UserSlice';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const setDeviceId = async () => {
    let deviceId = await DeviceInfo.getDeviceId();
    console.log(deviceId);

}

const LoginScreen = ({ navigation }: any) => {

    useEffect(() => {

        setDeviceId()
        
    }, [])
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });


    const handleSubmit = (values: any) => {
        console.log(values);
        dispatch(handleLogin(true))
    };


    const dispatch = useDispatch<AppDispatch>();
    const [isVisible, setisVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>


                <Text style={styles.headerText}>Login</Text>

            </View>
            <View style={styles.inputsContainer}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ email: '', password: ''}}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.inputsContainer}>
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


                            <View style={styles.helpersContainer}>

                                <Text>Remember me</Text>
                                <TouchableOpacity>

                                    <Text style={styles.helperText}>Forgot Password?</Text>

                                </TouchableOpacity>


                            </View>



                            <TouchableOpacity onPress={() => handleSubmit()}>

                                <View style={styles.button}>

                                    <Text style={styles.buttonText} >Login</Text>

                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>


            <View style={styles.seperatorContainer}>
                <View style={styles.seperatorLine}>

                </View>

                <Text style={styles.seperatorText}>or continue with</Text>

                <View style={styles.seperatorLine}>

                </View>


            </View>


            <View style={styles.additionalLoginsContainer}>

                <TouchableOpacity>

                    <View style={styles.loginContainer}>

                        <Gmail />

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.loginContainer}>

                        <Facebook />

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.loginContainer}>

                        <Linkedin />

                    </View>

                </TouchableOpacity>

            </View>




            <View style={styles.registerNav}>
                <Text style={styles.footerText}>Don,t have an account?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>

                    <Text style={[styles.footerText, { fontWeight: '600', color: '#2805FF' }]}>Signup</Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen

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
    additionalLoginsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom:'23%'
    },
    loginContainer: {
        borderWidth: 0.2,
        borderRadius: 4,
        width: windowWidth / 5,
        height: windowHeight / 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    seperatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom:'2%'
    },
    seperatorLine: {
        borderWidth: 0.2,
        height: 0,
        width: '32%',
        borderColor: 'black'
    },
    seperatorText: {
        fontWeight: '600',
        fontSize: 14
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
    helpersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:'20%'
    },
    helperText: {
        alignSelf: 'center',
        color: 'black',
        textDecorationLine: 'underline',
        fontWeight: '400',
        fontSize: 14
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
        marginBottom: '8%',
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