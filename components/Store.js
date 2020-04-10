import React from 'react'
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native'
import StoreRecommend from '../components/StoreRecommend'
import StoreRecommend4 from '../components/StoreRecommend4'
import Search from '../components/Search'
import StoreList from '../components/StoreList'
import StoreList2 from '../components/StoreList2'

function Store (){
    return(
        <ScrollView style={[styles.container]}>
            <Text style ={styles.title}>S T O R E</Text>
            <StoreRecommend/>
            <View style = {styles.search}><Search/></View>
            <StoreList2/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: 'white',
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
      search : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      }
  });
export default Store