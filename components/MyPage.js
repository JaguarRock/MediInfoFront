import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { Avatar, Divider} from 'react-native-elements'
import {CardView} from 'react-native-cardview'
import {TabBar} from 'react-native-tab-view'
import {ListItem} from 'react-native-elements'
import {Card , List} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Feather} from 'react-native-vector-icons' 
import SickList from '../components/SickList'
const userinfo = {
    name : '민효린',
    age : '34',
    sex : '여',
    sick : 'Yes',
    smokedrink : '안함'
}

function MyPage ({navigation}){
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}>MyPage</Text>
           <View style = {{alignItems : 'center', justifyContent : 'center', paddingTop : 10}}>
           <Avatar 
            rounded
            source = {{uri : 'http://img.asiatoday.co.kr/file/2017y/04m/26d/2017042601002345800168511.jpg'}}
            size = 'xlarge'
            >
              
            </Avatar>
            </View>
            
          <List.Section>
          <Divider/>
          <List.Item
          title="이름"
          right={() => <Text style = {{fontWeight : 'bold', paddingTop : 10}}>{userinfo.name}</Text>}/>
          <Divider/>
          <List.Item
          title="나이"
          right={() => <Text style = {{fontWeight : 'bold',paddingTop : 10}}>{userinfo.age}</Text>}/>
          <Divider/>
          <List.Item
          title="성별"
          right={() => <Text style = {{fontWeight : 'bold',paddingTop : 10}}>{userinfo.sex}</Text>}/>
          <Divider/>
          <List.Item
          title="지병유무"
          right={() => <Text style = {{fontWeight : 'bold',paddingTop : 10}}>{userinfo.sick}</Text>}/>
          <Divider/>
          <List.Item
          title="지병"
          right={() => <Feather style = {{paddingTop : 10}} name = 'arrow-right'/>}/>
          <Divider/>
          <List.Item
          title="흡연/음주"
          right={() => <Text style = {{fontWeight : 'bold',paddingTop : 10}}>{userinfo.smokedrink}</Text>}/>
          <Divider/>
          </List.Section>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#ffffff',
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

export default MyPage

