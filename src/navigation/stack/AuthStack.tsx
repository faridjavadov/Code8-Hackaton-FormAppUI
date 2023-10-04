import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../../screens/auth/RegisterScreen'
import LoginScreen from '../../screens/auth/LoginScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})