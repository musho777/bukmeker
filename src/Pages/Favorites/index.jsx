import {useState} from 'react'
import { Text, View,StyleSheet, TouchableOpacity,ScrollView } from "react-native"
import { Globalstyles } from '../../../globalStyle'
import { FavoriteIcone } from '../../Assets/svg'
import { TennisLiveBlock } from '../../Components/TennisLiveBlcok'

export const Favorites = () =>{
  const [active,setActive] = useState(0)
  const [activeType,setActiveType]  =  useState(0)
  const data = [
    {name:'Игры'},
    {name:'Команды'},
    {name:'Чемпионаты'},
    {name:'Games'},
    {name:'Киберспорт'},
    ]
    const data1 = [{},{},{},{},{},{}]
    return <View>
        <View style = {styles.header}>
           <TouchableOpacity onPress={()=>setActive(0)}> 
                <Text style = {[styles.text,active === 0 && styles.active]}>Избранное</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>setActive(1)}>
                <Text style = {[styles.text,active === 1 &&styles.active]}>Просмотрено</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style = {Globalstyles.main}>
            <View >
                <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
                    {data.map((elm,i)=>{
                        return <TouchableOpacity key={i} style = {[styles.block,activeType === i && {backgroundColor:'#40A789'}]} onPress = {()=>setActiveType(i)}>
                            <Text style = {[styles.text,{color:'#2A2B2D'},activeType === i && {color:'#FFFFFF'}]}>{elm.name}</Text>
                        </TouchableOpacity>
                    })}
                        
                </ScrollView>
            </View>
            <View style = {{justifyContent:'center',marginVertical:30,width:'100%',alignItems:'center'}}>
                <FavoriteIcone />
                <Text style = {{color:'#2A2B2D',fontSize:14,fontFamily:'Inter',fontWeight:500,marginVertical:10}}>Список избранных игр пуст</Text>
                <Text  style = {{color:'#748189',fontSize:14,fontFamily:'Inter',fontWeight:500,textAlign:'center',paddingHorizontal:20}}>Добавляйте события,которые Вам интересны, для быстрого доступа к ним</Text>
            </View>
            <View>
                <Text style = {{color:'#2A2B2D',fontSize:12,fontWeight:600,fontFamily:'Inter'}}>Рекомендуемые события</Text>
                <View showsVerticalScrollIndicator = {false} style = {{marginVertical:20,backgroundColor:'#E5EDF0',borderRadius:10,paddingHorizontal:10,marginBottom:100}}>
                    <Text style = {{color:'#2A2B2D',fontWeight:500,fontSize:14,fontFamily:'Inter',margin:10}}>LIVE</Text>
                    {data1.map((elm,i)=>(
                        <TennisLiveBlock lastIndex={i === data.length-1} index = {i} key = {i}/>
                    ))

                    }
                </View>
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    text:{
        color:'#748189',
        paddingVertical:10,
        paddingHorizontal:15,
    },
    header:{
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    active:{
        color:'#40A789',
        backgroundColor:'#ECF7F3',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:27,
    },
    block:{
        backgroundColor:'#ffffff',
        paddingHorizontal:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginLeft:1,
        marginRight:5,
        borderRadius:27,
        marginVertical:3,
    },
    active2:{
        
    }
})