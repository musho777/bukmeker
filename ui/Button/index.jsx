import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Button = ({text,width,height =42}) =>{
    return <TouchableOpacity  style = {[styles.button,{width:width &&width,height:height}]}>
        <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#40A789",
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:500,
        fontSize:14,
        color:"#F5F6FA",
    }
})