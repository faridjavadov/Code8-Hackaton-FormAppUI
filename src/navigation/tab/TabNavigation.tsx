    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'
    import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
    import ApplicationScreen from '../../screens/application/ApplicationScreen';
    import HomeScreen from '../../screens/home/HomeScreen';
    import SettingsScreen from '../../screens/settings/SettingsScreen';
    import Settings from '../../components/icons/navigationIcons/Settings'
    import Appeals from '../../components/icons/navigationIcons/Appeals'
    import Home from '../../components/icons/navigationIcons/Home'
import HomeStack from '../stack/HomeStack';



    const Tab = createBottomTabNavigator();


    const TabNavigation = () => {

        return (
            <Tab.Navigator screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle:{
                    height:'9%',
                    
                },
                tabBarLabelPosition:'below-icon',
                tabBarLabelStyle:{
                    color:'gray',
                    fontSize:12,
                    alignSelf:'center',
                    marginBottom:'8%',
                }


            }}>

                <Tab.Screen name='Home' component={HomeStack}

                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:focused?'#B4AAF2':'#FFFFFF',paddingVertical:'3%',paddingHorizontal:'15%',borderRadius:16}}>
                                    <Home color = {focused?'white':'#929295'}/>

                                </View>
                            )
                        }
                    }} />

                <Tab.Screen name='My Appeals' component={ApplicationScreen}

                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:focused?'#B4AAF2':'#FFFFFF',paddingVertical:'3%',paddingHorizontal:'15%',borderRadius:16}}>
                                    <Appeals color = {focused?'white':'#929295'}/>
                                </View>
                            )
                        }
                    }} />

                <Tab.Screen name='Settings' component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:focused?'#B4AAF2':'#FFFFFF',paddingVertical:'3%',paddingHorizontal:'15%',borderRadius:16}}>
                                    <Settings color = {focused?'white':'#929295'} />
                                </View>
                            )
                        }
                    }} />



            </Tab.Navigator>
        )

    }

    export default TabNavigation

    const styles = StyleSheet.create({})