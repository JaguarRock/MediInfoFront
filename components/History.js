import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Search from '../components/Search'
import TodayDrug from '../components/TodayDrug'
import {Divider, Card} from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddMedicine from '../components/AddMedicine'
import Information from '../components/Information'
import HistoryDetail from '../components/HistoryDetail'
import HistoryDetail2 from './HistoryDetail2'
const Tab = createMaterialTopTabNavigator();

function History (){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>H I S T O R Y</Text>
            <HistoryDetail2/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#F5FCFF'
    },
    title :{
      color : 'black',
    fontSize : 30,
    marginTop : 70,
    marginLeft : 20,
    marginRight : 150,
    paddingBottom : 20,
    backgroundColor : '#FFE1E4'
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

export default History