import React, { Component } from 'react';
import {ScrollView} from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Tired from '../components/StoreCategory/Tired'
import NoEye from '../components/StoreCategory/NoEye'
import Sleepy from '../components/StoreCategory/Sleepy'
import Recommend from '../components/StoreCategory/Recommend'
import Search from '../components/Search'
const Page = ({label}) => (
    <View style={styles.container}>
      <Tired/>
    </View>
);

const Page2 = ({label}) => (
    <View style = {styles.container}>
        <NoEye/>
    </View>
)

const Page3 = ({label}) => (
    <View style = {styles.container}>
        <Sleepy/>
    </View>
)

const Page4 = ({label}) => (
    <View style = {styles.container}>
        <Recommend/>
    </View>
)


class StoreRecommend2 extends Component {
  render() {
    return (
          <ScrollableTabView
              tabBarActiveTextColor="#FF5A5F"
              renderTabBar={() => <TabBar underlineColor="#FF5A5F" />}>
            <Page tabLabel={{label: "피곤해"}} label = "피곤해"/>
            <Page2 tabLabel={{label: "졸려"}} label = "졸려"/>
            <Page3 tabLabel={{label: "눈 침침해"}} label = "눈 침침해"/>
            <Page4 tabLabel={{label: "추천해줘"}} label = "캘린더"/>
          </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: 'white',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 28,
    },
    title :{
        color : 'black',
      fontSize : 30,
      marginTop : 70,
      marginLeft : 20,
      marginRight : 190,
      paddingBottom : 20,
      backgroundColor : '#FF5A5F'
      },
  });

export default StoreRecommend2