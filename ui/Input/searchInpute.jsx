import { StyleSheet, TextInput } from "react-native"

export const SearchInpute = ({value,width = 160}) =>{
    return <TextInput autoFocus placeholderTextColor="#000"  placeholder="Введите запрос" style = {[styles.input,{width:width}]} />
}
const styles = StyleSheet.create({
    input:{
        borderRadius:41,
        backgroundColor:'#F5F6FA',
        height:35,
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
        color:"#000"
    }
})