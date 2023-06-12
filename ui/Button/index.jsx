import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Button = ({onPress,text,width,height =42,disable}) =>{
    return <TouchableOpacity onPress={onPress} style = {[styles.button,{width:width &&width,height:height},disable && {opacity: 0.5}]}>
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
        fontFamily:'Inter-Medium',
        fontStyle:'normal',
        fontSize:14,
        color:"#F5F6FA",
    }
})