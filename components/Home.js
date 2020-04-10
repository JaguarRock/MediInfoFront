import React from 'react'
import {StyleSheet, View, Text, Button , ScrollView} from 'react-native'
import Search from '../components/Search'
import TodayDrug from '../components/TodayDrug'
import {Divider, Card} from 'react-native-elements'

function Home (){
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>H O M E</Text>
            {/*<View style = {styles.search}><Search/></View>*/}
            <Text style = {styles.subtitle}>오늘의 약봉투</Text>
            <Divider style = {{backgroundColor : '#FF5A5F', width : '70%', marginLeft : 20, borderWidth :1, borderColor : '#FF5A5F'}}/>
            <TodayDrug/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#ffffff'
    },
    title :{
      color : 'black',
      fontSize : 30,
      marginTop : 70,
      marginLeft : 20,
      marginRight : 200,
      paddingBottom : 20,
      backgroundColor : '#FF5A5F'
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

export default Home