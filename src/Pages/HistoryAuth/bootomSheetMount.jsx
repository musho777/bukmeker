import { StyleSheet, View,TouchableOpacity,Text, Image } from "react-native"

export const BootomSheetMount = () =>{
    return <View >
        <Text style = {styles.text}>Выберите период</Text>
        <TouchableOpacity style = {[styles.block,{borderBottomWidth:1}]}>
            <Text style = {styles.text1}>За месяц</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.block,{borderBottomWidth:0}]}>
            <Text style = {styles.text1}>Задать период</Text>
        </TouchableOpacity>

    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#2A2B2D',
        fontWeight:700,
        fontSize:16,
        textAlign:'center',
    },
    text1:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontSize:15,
        fontWeight:400,
    },
    block:{
        borderColor:'#F5F6FA',
        borderBottomWidth:1,
        marginHorizontal:20,
        paddingVertical:20,
    }
})