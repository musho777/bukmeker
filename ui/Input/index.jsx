import { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { Eye } from "../../src/Assets/svg"

export const Input = ({width = "100%",placeholder,secure,value,onChange,paddingVertical = 0}) =>{
    const [password,setPassword] = useState(secure)
    const showPassword = () =>{
        setPassword(!password)
    }
    return <View style = {[styles.inputWrapper,{width:width}]}>
        <TextInput 
            placeholderTextColor="#748189" 
            secureTextEntry = {password} 
            placeholder={placeholder} 
            value = {value}
            onChangeText = {(e) => onChange(e)}
            style = {[styles.input,{width:width,paddingRight:password ? 22:0,paddingVertical:paddingVertical}]} 
        />
        {secure &&
            <TouchableOpacity onPress={()=>showPassword()} style = {styles.password} >
                <Eye />
            </TouchableOpacity>
        }
    </View>
}
const styles = StyleSheet.create({
    input:{
        borderColor:"#748189",
        borderBottomWidth:1.3,
        borderColor:'#748189',
        color:"#748189",
        paddingLeft:0,
        fontSize:18
    },
    password:{
        position:'absolute',
        right:0,
        bottom:5,
    },
    inputWrapper:{
        position:'relative',
    }
})