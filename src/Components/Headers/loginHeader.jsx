import { View,Text,StyleSheet,TouchableOpacity, SafeAreaView } from 'react-native'
import {  } from 'react-native-gesture-handler'
import { Arrow } from '../../Assets/svg'
export const LoginHeader = ({text,onPress}) =>{
    return <SafeAreaView style = {styles.header}>
        <TouchableOpacity onPress={onPress}>
            <Arrow />
        </TouchableOpacity>
        <Text style = {styles.text}>{text}</Text>
        <View></View>
    </SafeAreaView>
}
const styles  = StyleSheet.create({
    header:{
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        backgroundColor:"transparent"
    },
    text:{
        color:'#748189',
        fontSize:18,
        fontFamily:"Inter",
        fontStyle:"normal", 
        fontWeight:500,
        textAlign:'center'
    }
})