import {useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native"
import { Arrow2, ExpresSvg } from "../../Assets/svg"
import { BlockHeader } from '../../Components/blockHeader'

export const Item = ({index,bet,count,type,data}) =>{
    const [open,setOpen] = useState()
    return <View style = {[{width:'98%'},styles.mainBlcok]}>
    <TouchableOpacity style = {[styles.item,open && {borderBottomEndRadius:0,borderBottomLeftRadius:0}]} onPress = {()=>setOpen(!open)}>
        <View style = {styles.main}>
            <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style = {{flexDirection:'row'}}>
                    {type?.map((elm,i)=>(
                        <View key={i} style = {{marginRight:7}}>
                            <ExpresSvg title={elm} key={i} />
                        </View>
                    ))}
                </View>
                <Text style = {styles.Text}>События.: <Text style = {[styles.Text,{fontSize:14,fontWeight:600}]}>{count}</Text></Text>
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style = {styles.text2}>Экспресс Линия {index}</Text>
                <Text style = {styles.Text}>Коэф.: <Text style = {styles.text2}>{bet}</Text></Text>
            </View>
        </View>
        <Arrow2 />
    </TouchableOpacity>
    {open && data.map((elm,i)=>(
        <View style = {[styles.block,(i === data.length-1) && {borderBottomEndRadius:15,borderBottomLeftRadius:15,borderBottomWidth:0,borderTopWidth:0}]}>
            <BlockHeader name = {'АТР.Женева'} boll = {'tennis'} svg  ={false}/>
            <View style = {{marginVertical:5}}>
                <Text style = {[styles.text2,{fontWeight:600}]}>Real Madird - Barcelona</Text>
                <Text style = {styles.Text}>Итёт 2-ий сет</Text>
                <View style = {{marginTop:10,paddingVertical:7,backgroundColor:'#F5F6FA',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,borderRadius:47}}>
                    <Text style = {styles.Text}>fora 1 (-11.5)</Text>
                    <Text  style = {[styles.text2,{fontWeight:600}]}>1.75</Text>
                </View>
            </View>
        </View>
    ))
    }
    </View>
}
const styles = StyleSheet.create({
    item:{  
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
        borderRadius:15,
    },
    mainBlcok:{
        marginVertical:5,
    },
    main:{
        width:'93%',
    },
    Text:{
        color:'#748189',
        fontSize:12,
        fontFamily:'Inter-Regular',
    },
    text2:{
        color:'#2A2B2D',
        fontSize:14,
        fontFamily:"Inter-SemiBold",
    },
    block:{
        backgroundColor:'#FFFFFF',
        // borderBottomEndRadius:15,
        // borderBottomLeftRadius:15,
        borderStyle:'dashed',
        paddingHorizontal:10,
        borderColor:'#748189',
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingVertical:10,
    },
})