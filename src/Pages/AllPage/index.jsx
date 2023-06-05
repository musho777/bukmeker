import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import {useState} from 'react'
import { HorizontalBlock } from "../../Components/horizontalBlock"

export const All = () =>{
    const data = [
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
        {icone:'football',title:'Футбол',count:'120'},
    ]
    const [active,setActive ] = useState(0)
    return <View >
         <View style = {styles.header}>
           <TouchableOpacity onPress={()=>setActive(0)}> 
                <Text style = {[styles.text,active === 0 && styles.active]}>LIVE</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>setActive(1)}>
                <Text style = {[styles.text,active === 1 &&styles.active]}>Линия</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>setActive(2)}>
                <Text style = {[styles.text,active === 2 &&styles.active]}>Киберы</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style = {{marginTop:10,paddingHorizontal:7}} showsHorizontalScrollIndicator = {false}>
            {data.map((elm,i)=>(
                <View key={i} style = {[{alignItems:'center'},(i ===data.length-1 &&{marginBottom:70})]} >
                    <HorizontalBlock icone={'football'} title={'Футбол'} count = {120} />
                </View>
            ))}
        </ScrollView>
    </View>
}

const styles  = StyleSheet.create({
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
    },
    active:{
        color:'#40A789',
        backgroundColor:'#ECF7F3',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:27,
    }
})