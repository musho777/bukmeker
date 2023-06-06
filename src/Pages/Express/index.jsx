import { StyleSheet, View,Text } from "react-native"
import { ScrollView } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { ES } from "../../Assets/svg"
import { Item } from "./item"

export const Express  = () =>{
    const data =[
        {type:['es','es','es','es'],count:4,bet:6.239,data:[{},{},{},{},{},{},{},]},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
        {type:['es','es','es','es'],count:4,bet:6.239},
    ]
    return <ScrollView showsHorizontalScrollIndicator ={false}  style = {Globalstyles.main}>
        {data.map((elm,i)=>(
            <View key={i} style = {{justifyContent:'center',alignItems:'center'}}>
                <Item data = {elm.data}  index = {i+1} type={elm.type}  icon={elm.icone} count={elm.count} bet = {elm.bet}/>
            </View>
        ))}
    </ScrollView>
}
const styles = StyleSheet.create({

})