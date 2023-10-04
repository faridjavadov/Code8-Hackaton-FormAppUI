import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from '../../screens/onBoard/OnBoardScreen'
import TabNavigation from '../tab/TabNavigation'

const Stack = createNativeStackNavigator()

const OnBoardStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
        <Stack.Screen name='TabNavigation' component={TabNavigation} />

    </Stack.Navigator>
  )
}

export default OnBoardStack

const styles = StyleSheet.create({})