import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { handleLogin } from '../../redux/slicers/StatusSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuSection from '../../components/items/settingsItems/MenuSection';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SettingsScreen = () => {

  const handleLogOut = async() => {
    dispatch(handleLogin(false))
  }

  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={{ flex: 1, backgroundColor: '#9088C2' }}>
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <Text style={styles.headerText}>Menu</Text>

          <View style={[styles.settingsMenu]}>

            <View style={styles.generalMenu}>

              <Text style={styles.generalHeaderText}>General</Text>

              <MenuSection name={'Account Information'} />
              <MenuSection name={'Appearance'} />
              <MenuSection name={'Language'} />
              <MenuSection name={'Notifications'} />

            </View>

            <View style={styles.generalMenu}>

              <Text style={styles.generalHeaderText}>Support</Text>

              <MenuSection name={'Report on issue'} />
              <MenuSection name={'FAQ'} />


            </View>

            <View style={styles.generalMenu}>

              <Text style={styles.generalHeaderText}>Other</Text>

              <MenuSection name={'Rate us'} />
              <MenuSection name={'Share application'} />


            </View>

            <TouchableOpacity onPress={handleLogOut}>

              <View style={[styles.buttonContainer]}>

                <Text style={[styles.generalHeaderText]}>Log Out</Text>

              </View>

            </TouchableOpacity>
            <View style={{ height: windowHeight / 16}} />

          </View>
        </ScrollView>

      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    marginTop: '12%',
    flex: 1,
  },
  scrollContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#9088C2'
  },
  headerText: {
    marginTop: '10%',
    marginBottom: '5%',
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    paddingHorizontal: '3%'
  },
  settingsMenu: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: '3%',


  },
  generalMenu: {
    marginTop: '5%',
    gap: 10

  },
  menuSection: {
    gap: 5
  },
  seperator: {

  },
  generalHeaderText: {
    fontSize: 18,
    padding: '2%',
    fontWeight: '600'
  },
  generalText: {
    fontSize: 18,
    fontWeight: '500'
  },
  buttonContainer: {
    borderWidth: 0.8,
    width: windowWidth / 1.22,
    height: windowHeight / 16,
    marginTop: '5%',
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%'
  },

})