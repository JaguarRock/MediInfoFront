import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

function HistoryCalender(){
    return(
        <View sytle = {styles.container}>
            <Text style = {styles.title}>캘 린 더</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title :{
      color : 'black',
      fontSize : 30,
      marginTop : 70,
      marginLeft : 20,
      paddingBottom : 20
    },
    subtitle : {
        fontSize : 20,
        paddingTop : 25,
        marginLeft : 20,
        paddingBottom : 3
    },
    search : {
        justifyContent : 'center',
        alignItems : 'center'
    }
  });


export default HistoryCalender