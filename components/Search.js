import { SearchBar } from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native'
import React from 'react'
export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar round containerStyle ={{backgroundColor: 'none',width : '95%', borderWidth: 0, borderTopWidth :0, borderBottomWidth :0}}
      inputContainerStyle={{backgroundColor: 'white', borderColor : 'black', borderWidth : 1, borderBottomWidth : 1}}
        onChangeText={this.updateSearch}
        value={search}
        placeholder = 'Search Something'
      />
    );
  }
}

const styles = StyleSheet.create({
    des : {
      alignItems : 'center',
      justifyContent : 'center'
    }
})
