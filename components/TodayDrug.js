import React from 'react'
import {View, Text, ScrollView , StyleSheet, TouchableOpacity} from 'react-native'
import {Card, Avatar, Button} from 'react-native-elements'

function TodayDrug(){
    return(
        <ScrollView horizontal={true} style={{scaleX:1 , paddingBottom : 150}}showsHorizontalScrollIndicator={false}>
        <Card containerStyle = {styles.cardstyle}>
            <TouchableOpacity style={styles.opacity}>
                <Text style = {{color : 'black', fontSize : 35}}>관절염</Text>
            </TouchableOpacity>
            <Text style = {styles.time}>남은시간 </Text>
            <Text style = {{paddingTop : 10, fontSize : 30}}>01 : 18 : 39 </Text>
        </Card>
        <Card containerStyle = {styles.cardstyle}>
            <TouchableOpacity style={styles.opacity}>
                <Text style = {{color : 'black', fontSize : 35}}>감기</Text>
            </TouchableOpacity>
            <Text style = {styles.time}>남은시간 </Text>
            <Text style = {{paddingTop : 10, fontSize : 30}}>05 : 40 : 01 </Text>
        </Card>
        <Card containerStyle = {styles.cardstyle}>
            <TouchableOpacity style={styles.opacity}>
                <Text style = {{color : 'black', fontSize : 35}}>요통</Text>
                
            </TouchableOpacity>
            <Text style = {styles.time}>남은시간 </Text>
            <Text style = {{paddingTop : 10, fontSize : 30}}>03 : 22 : 33 </Text>
        </Card>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    card :{
        
        borderColor:'#FF5A5F',
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        width : 100, height : 100, borderRadius : 50
    },
    opacity : {
        borderColor:'#FF5A5F',
        backgroundColor : '#C5C5C5',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:50,
    },

    time : {
        paddingTop : 30
    },
    cardstyle : {
        width : 180, 
        borderRadius : 7, 
        borderColor : '#000000',
    }
}
)


export default TodayDrug