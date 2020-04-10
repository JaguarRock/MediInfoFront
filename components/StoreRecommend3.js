import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, SafeAreaView } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

export default class StoreRecommend3 extends Component {
  state = {
    selectedTab: 0,
    routes: [
        { key: 'One', title: '피곤해' },
        { key: 'Two', title: '졸려' },
        { key: 'Three', title: '눈 침침해' },
        { key: 'Four', title: '추천해줘' }
      ],
  };

  setTab(tab) {
    this.setState({ selectedTab: tab });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MaterialTabs
          items={['One', 'Two', 'Three', 'Four']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab.bind(this)}
          barColor="#1fbcd2"
          indicatorColor="#fffe94"
          activeTextColor="white"
        >
            <MaterialTabs label = "three"/>

        </MaterialTabs>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('StoreRecommend3', () => StoreRecommend3);