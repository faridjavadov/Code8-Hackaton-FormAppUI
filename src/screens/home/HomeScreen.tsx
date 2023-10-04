import { StyleSheet, Text, View, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import FormLogo from '../../components/icons/homeIcons/FormLogo'
import UILogo from '../../components/icons/homeIcons/UILogo'
import BackendLogo from '../../components/icons/homeIcons/BackendLogo'
import Notificaiton from '../../components/icons/homeIcons/Notification'
import Search from '../../components/icons/homeIcons/Search'
import { useSelector } from 'react-redux'
import { StateType } from '../../redux/store/Store'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}:any) => {

    const {userName} = useSelector((state:StateType)=>state.UserSlice)

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.headerContainer}>

                <Text style={styles.headerText}>Hi, {userName}</Text>
                <Text>What do you want to learn today?</Text>

                <View style={{position:'absolute',right:2,top:2,gap:8,flexDirection:'row'}}>

                    <Search/>
                    <Notificaiton/>
                    
                </View>

            </View>

            <View style={styles.formModal}>

                <View>

                    <Text style={styles.formHeaderText}>Your Form</Text>
                    <Text style={styles.formText}>If you want to apply now</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate("FormScreen")} >

                        <View style={styles.button}>

                            <Text style={styles.buttonText} >Get Started</Text>

                        </View>

                    </TouchableOpacity>

                </View>
                <View>

                    <FormLogo />


                </View>

            </View>

            <Text style={styles.recText}>Recommended</Text>
            <View style={styles.recommendationContainer}>

                <View style={styles.recBox}>

                    <UILogo />
                    <Text style={{ marginBottom: '5%' }}>UX/UI Design</Text>

                    <TouchableOpacity >

                        <View style={styles.buttonSmall}>

                            <Text style={styles.buttonText} >Get Started</Text>

                        </View>

                    </TouchableOpacity>




                </View>

                <View style={styles.recBox}>

                    <BackendLogo />
                    <Text style={{ marginBottom: '5%' }}>Backend</Text>

                    <TouchableOpacity >

                        <View style={styles.buttonSmall}>

                            <Text style={styles.buttonText} >Get Started</Text>

                        </View>

                    </TouchableOpacity>
                </View>

            </View>

            <Text style={styles.recText}>All course type</Text>
            <View style={[styles.recommendationContainer,{marginBottom:'12%'}]}>

                <View style={styles.recBox}>

                    <BackendLogo />
                    <Text style={{ marginBottom: '5%' }}>Backend</Text>

                    <TouchableOpacity >

                        <View style={styles.buttonSmall}>

                            <Text style={styles.buttonText} >Get Started</Text>

                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.recBox}>

                    <UILogo />
                    <Text style={{ marginBottom: '5%' }}>UX/UI Design</Text>

                    <TouchableOpacity >

                        <View style={styles.buttonSmall}>

                            <Text style={styles.buttonText} >Get Started</Text>

                        </View>

                    </TouchableOpacity>
                </View>


            </View>

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '6%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
    },
    headerContainer: {
        marginBottom: '8%'

    },
    headerText: {
        fontSize: 24,
        fontWeight: '400',
        color: '#49494B',
        marginBottom: '2%'
    },
    formModal: {
        borderWidth: 0.2,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '5%',
        borderRadius: 6,
        marginBottom: '10%'
    },
    button: {
        backgroundColor: '#9088C2',
        width: windowWidth / 2.5,
        height: windowHeight / 22,
        borderRadius: 4,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%',

    },
    buttonSmall: {
        backgroundColor: '#9088C2',
        width: windowWidth / 3,
        height: windowHeight / 25,
        borderRadius: 4,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: '400'
    },
    formHeaderText: {
        fontSize: 20
    },
    formText: {
        marginBottom: 20
    },
    recText: {
        fontSize: 16,
        marginBottom: '5%'
    },
    recommendationContainer: {
        flexDirection: 'row',
        gap: 20
    },
    recBox: {
        borderWidth: 0.2,
        borderRadius: 4,
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})