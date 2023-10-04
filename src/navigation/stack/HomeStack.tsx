import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/home/HomeScreen'
import FormScreen from '../../screens/home/FormScreen'
import DateScreen from '../../screens/home/DateScreen'
import SuccessScreen from '../../screens/home/SuccessScreen'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='FormScreen' component={FormScreen} />
        <Stack.Screen name='DateScreen' component={DateScreen} />
        <Stack.Screen name='SuccessScreen' component={SuccessScreen}/>

    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})