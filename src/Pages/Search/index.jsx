import { StyleSheet, Text, View } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Item } from "./item"

export const Search = () =>{
    return <View style = {Globalstyles.main}>
        <Text style = {styles.text}>Популярные запросы</Text>
        <View style = {styles.block}>
            <Item name={'Григор Димитров'}  />
            <Item name={'Григор Димитров'}  />
            <Item name={'Сампдория'}  />
            <Item name={'Григор Димитров'}  />
            <Item name={'Григор Димитров'}  />

        </View>
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#2A2B2D',
        fontFamily:'Inter-SemiBold',
        fontSize:14,
    },
    block:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:10,
    }
})