import { StyleSheet, TouchableOpacity } from "react-native"
import { CheckMark } from "../../src/Assets/svg"

export const ButtonWhiteIcon = () =>{
    return <TouchableOpacity style = {styles.button}><CheckMark /></TouchableOpacity>
}
const styles = StyleSheet.create({
    button:{
        width:56,
        height:56,
        backgroundColor:'#4CB769',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
})