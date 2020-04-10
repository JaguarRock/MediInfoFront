import * as React from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';
import Tired from './StoreCategory/Tired'
import Sleepy from './StoreCategory/Sleepy'
import NoEye from './StoreCategory/NoEye'
import Recommend from './StoreCategory/Recommend'
import Search from './Search'

const FirstRoute = () => (
  <View style={[styles.container]}><Sleepy/></View>
);
const SecondRoute = () => (
  <View style={[styles.container]}><Tired/></View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}><NoEye/></View>
);
const FourthRoute = () => (
  <View style={[styles.container]}><Recommend/></View>
);

export default class StoreRecommend4 extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '피곤해' },
      { key: '2', title: '졸려' },
      { key: '3', title: '눈 침침해' },
      { key: '4', title: '추천해줘' }
    ],
  };

  

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = (props) => {
          return(
            <TabBar navigationState = {this.state} getLabelText={({ route }) => route.title} ></TabBar>
            )
        };

  _renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3 : ThirdRoute,
    4 : FourthRoute
  });

  render() {
    return (
      <TabView
      navigationState={this.state}
      renderScene={this._renderScene}
      renderTabBar={this._renderTabBar}
      onIndexChange={this._handleIndexChange}
      swipeEnabled = {false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  tabBar: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title :{
    color : 'black',
    fontSize : 30,
    marginTop : 70,
    marginLeft : 20,
    paddingBottom : 20
  },
});
