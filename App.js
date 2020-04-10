import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import FirstPage from './components/FirstPage'
import History from './components/History'
import Store from './components/Store'
import MyPage from './components/MyPage'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {MaterialIcons} from 'react-native-vector-icons'
import {Feather} from 'react-native-vector-icons' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer >
    <BottomTab.Navigator>
          <BottomTab.Screen name = "FirstPage" component = {FirstPage}  options = {{tabBarVisible : false}}/>
          <BottomTab.Screen name = "Home" component = {Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),}}/>

          <BottomTab.Screen name = "History" component = {History} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-outline" color={color} size={size} />
          ),}}/>

          <BottomTab.Screen name = "Store" component = {Store} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-grocery-Store" color={color} size={size} />
          ),}}/>
          <BottomTab.Screen name = "MyPage" component = {MyPage} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),}}/>
    </BottomTab.Navigator>
    
    
    </NavigationContainer>
 
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
      <BottomTab.Navigator>
        <BottomTab.Screen>
          <BottomTab.Screen name = "New" component = {New}/>
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>*/
  );
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
    fontSize : 30
  }
});

export default App