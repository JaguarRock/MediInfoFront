import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function FirstPage({navigation}) {
    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>약 먹을 시간이다!</Text>
        <Button title = "시작하기" color = 'primary' onPress={() => navigation.navigate('Home')}/>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF5A5F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title :{
      color : 'white',
      fontSize : 35,
      marginBottom : 150
    }
  });

  export default FirstPage