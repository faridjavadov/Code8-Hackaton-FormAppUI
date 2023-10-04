import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/store/Store'
import TabNavigation from '../navigation/tab/TabNavigation'
import { fetchLoginStatus } from '../redux/slicers/StatusSlice'
import LoadingScreen from './loading/LoadingScreen'
import AuthStack from '../navigation/stack/AuthStack'
import OnBoardStack from '../navigation/stack/OnBoardStack'





const Opening = () => {

    const [loading, setloading] = useState(true)

    const { loginStatus } = useSelector((state: StateType) => state.StatusSlice)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Dispatch the action to fetch login status from AsyncStorage
        dispatch(fetchLoginStatus());
        setloading(false)
    }, [dispatch]);
    if (loading == true) {
        return <LoadingScreen />
    }
    else {
        if (loginStatus) {
            return <OnBoardStack/>
        } else {
            return <AuthStack />
        }

    }
}

export default Opening

const styles = StyleSheet.create({})