import { StyleSheet, TextInput } from "react-native"

export const SearchInpute = ({value,}) =>{
    return <TextInput placeholderTextColor="#000"  placeholder="Введите запрос" style = {styles.input} />
}
const styles = StyleSheet.create({
    input:{
        borderRadius:10,
        backgroundColor:'#F5F6FA',
        width:160,
        height:35,
    }
})