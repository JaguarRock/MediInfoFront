import React from 'react'
import {ScrollView , StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Card} from 'react-native-elements'

function Tired(){
    return(
        <ScrollView horizontal={true} style={{scaleX:1}}showsHorizontalScrollIndicator={false}>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>게보린</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>타이레놀</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
        <Card containerStyle = {{width : 180, borderRadius : 7}}>
            <TouchableOpacity>
                <Text style = {{color : 'black', fontSize : 35}}>비타민</Text>
            </TouchableOpacity>
            <Text style = {{paddingTop : 180, fontSize : 30}}>10000W</Text>
        </Card>
    </ScrollView>
    )
}

export default Tired