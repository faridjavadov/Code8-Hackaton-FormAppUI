import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/tab/TabNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';
import Opening from './src/screens/Opening';




export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Opening/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});