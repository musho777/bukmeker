import { StyleSheet, View,TouchableOpacity,Text } from "react-native"
import {  } from "react-native-svg"
import { Arrow, Live, Search, Touch } from "../../Assets/svg"

export const AlltypesHeader = ({onPress}) =>{
    return <View style = {styles.header}>
        <View style = {styles.header1}>
            <TouchableOpacity style = {styles.arrow} onPress={onPress}><Arrow /></TouchableOpacity>
            <Text style = {styles.title}>Виды спорта</Text>
            <View style = {styles.icone}>
                <Search />
                <Touch/>
                <Live />
            </View>
        </View>
    </View>
}

const styles  = StyleSheet.create({
    header:{
        backgroundColor:"#FFFFFF",
        height:50,
        width:'100%',
    },
    title:{
        color:'#748189',
        fontWeight:600,
        fontSize:16,
        fontFamily:'Inter',
        width:'34%'
    },
    header1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%',
        marginTop:15,
        alignItems:'center',
        height:25,
    },
    icone:{
        width:'33%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    arrow:{
        width:'33%',
    },
})