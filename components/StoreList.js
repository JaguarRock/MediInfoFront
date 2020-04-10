import React from 'react'
import {ScrollView , StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Card} from 'react-native-elements'
function StoreList(){
    return(
        <ScrollView>
        <Card containerStyle = {styles.cont}>
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

const styles  = StyleSheet.create( {
    cont : {width : 370, borderRadius : 7, height : 100}
})
export default StoreList