import React from 'react'
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import {CardList} from '../components/CardList'

const cards = [
    {
      id: "0",
      title: <Text style = {{color : 'black'}}>관절</Text>,
      content: <Text>아침 점심 저녁</Text>
    },
    {
      id: "1",
      title: <Text style = {{color : 'black'}}> 감기</Text>,
      content: <Text>아침 점심 저녁</Text>
    },
    {
      id: "2",
      title: <Text style = {{color : 'black'}}> 요통</Text>,
      content: <Text>ㅇ</Text>
    }
  ]
function HistoryList (){
    return (
        <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
}
)



export default HistoryList