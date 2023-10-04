import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UIUX from '../../icons/appIcons/UIUX'
import Backend from '../../icons/appIcons/Backend'

const Appeal = (props: any) => {
    return (
        <View style={styles.container}>
            {
                props.item.title == 'UI/UX Design' ? <UIUX /> : <Backend />
            }
            <Text style={styles.title}>{props.item.title}</Text>
            <Text>{props.item.date}</Text>
            <Text style={{marginBottom:10}}>{props.item.time}</Text>
            {
            props.item.isAccepted == true ? <Text style={{color:'#00B087',backgroundColor:'#A6E7D8',borderWidth:1,borderColor:'#00B087',padding:5,borderRadius:4}}>Accepted</Text> : <Text style={{color:'#DF0404',borderWidth:1,borderColor:'#DF0404',backgroundColor:'#FFC5C5',padding:5,borderRadius:4}}>Unaccepted</Text>
            }
        </View>
    )
}

export default Appeal

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: '10%'
    },
})