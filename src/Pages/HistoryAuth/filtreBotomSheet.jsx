import {useState} from 'react'
import { StyleSheet, View,Text,TouchableOpacity } from "react-native"
import { Button } from '../../../ui/Button'
import {  Checkded, NotChecked } from "../../Assets/svg"

export const FiltreBotomSheet = () =>{
    const [data,setData] = useState([
        {name:'Все',checked:false},
        {name:'Принята',checked:false},
        {name:'Проиграна',checked:false},
        {name:'Выиграна',checked:true},
        {name:'Выплачена',checked:false},
        {name:'Заблокирована',checked:false},
        {name:'Удалена',checked:false},
        {name:'Продана',checked:false},
    ])
    const handelChange = (i,checked) =>{
        console.log(data)
        let item = [...data]
        item[i].checked = !checked
        setData(item)
    }
    return <View >
         <Text style = {styles.text}>Фильтр статуса</Text>
         {data.map((elm,i)=>(
            <TouchableOpacity onPress={()=>handelChange(i,elm.checked)} key={i} style = {[styles.block]}>
                {elm.checked ?
                    <Checkded/>:    
                    <NotChecked />
                }
                <Text style = {styles.text1}>{elm.name}</Text>
            </TouchableOpacity>
         ))

         }
         <View style = {{paddingHorizontal:10}}>
            <Button text={'ПРИМЕНИТЬ'} />
         </View>
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
        fontWeight:500,
        marginHorizontal:10,
    },
    block:{
        borderColor:'#F5F6FA',
        borderBottomWidth:1,
        marginHorizontal:20,
        paddingVertical:20,
        flexDirection:'row',
        borderBottomWidth:1,
        alignItems:'center',
    }
})