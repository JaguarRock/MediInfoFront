import * as React from 'react';
import { View, StyleSheet, Dimensions, Text,TouchableOpacity } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import HistoryList from '../components/HistoryList'
import HistoryCalender from '../components/HistoryCalender'

const FirstRoute = () => (
  <View style={[styles.container]}>
    <HistoryList/>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container]}>
    <HistoryCalender/>
  </View>
);

export default class HistoryDetail extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '리스트' },
      { key: 'second', title: '캘린더' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round( Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })), 0, 0);

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
