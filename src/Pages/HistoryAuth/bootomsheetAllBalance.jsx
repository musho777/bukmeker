import { StyleSheet, View,Text,TouchableOpacity } from "react-native"
import { Add, Monny, RadioButton } from "../../Assets/svg"

export const BootomsheetAllBalance = () =>{
    return <View>
        <Text style = {styles.text}>Выберите счет</Text>
        <TouchableOpacity style = {[styles.block,{borderBottomWidth:1}]}>
            <Add />
            <Text style = {styles.text1}>Пополнить счет</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.block,{borderBottomWidth:0,justifyContent:'space-between'}]}>
            <View style = {{flexDirection:'row'}}>
                <Monny />
                <View style = {{alignItems:'center'}}>
                    <Text style = {styles.text2}>Основной</Text>
                    <Text style = {styles.text3}>0 TMTM</Text>
                </View>
            </View>
            <RadioButton />
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
        fontFamily:'Inter-Regular',
        fontSize:15,
        paddingHorizontal:10,
    },
    block:{
        borderColor:'#F5F6FA',
        borderBottomWidth:1,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20,
    },
    text2:{
        color:'#40A789',
        fontFamily:'Inter-Regular',
        fontSize:9,
        paddingHorizontal:10,
    },
    text3:{
        color:'#40A789',
        fontFamily:'Inter-SemiBold',
        fontSize:10,
        paddingHorizontal:10,
    }
})