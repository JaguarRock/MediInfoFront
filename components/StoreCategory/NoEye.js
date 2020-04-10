import React from 'react'
import {ScrollView , StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Card} from 'react-native-elements'
function NoEye(){
    return(
        <ScrollView horizontal={true} style={{scaleX:1}}showsHorizontalScrollIndicator={false}>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>케토톱</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>오메가3</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>비타민D</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    card :{
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        width : 100, height : 100, borderRadius : 50
    },
    opacity : {
        borderColor:'#C5C5C5',
        backgroundColor : '#C5C5C5',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:50,
    },

    time : {
        paddingTop : 30
    }
}
)

export default NoEye