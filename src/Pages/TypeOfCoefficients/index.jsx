import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Item } from "./item"

export const TypeOfCoefficients = () =>{
    const [data,setData] = useState([
        {text1:'Американский',text2:'+120',selected:false},
        {text1:'Американский',text2:'+120',selected:false},
        {text1:'Американский',text2:'+120',selected:false},
        {text1:'Американский',text2:'+120',selected:false},
        {text1:'Американский',text2:'+120',selected:false},
        {text1:'Американский',text2:'+120',selected:false},

    ])
    const handelPress= (i,selected) =>{
        let item = [...data]
        item[i].selected = !selected
        setData(item)
    }
    return <View style = {styles.block}>
        {data.map((elm,i)=>(
            <Item onPress = {()=>handelPress(i,elm.selected)} text1={elm.text1} text2 = {elm.text2} selected = {elm.selected} key = {i} />
        ))}
    </View>
}
const styles = StyleSheet.create({
    block:{
        marginTop:10,
        flexDirection:'row',
        flexWrap:"wrap",
        paddingHorizontal:10,
        justifyContent:'space-around',
    }
})