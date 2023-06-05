import {useState}  from 'react'
import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import {  SportSvg } from '../../Assets/svg'
import { Card } from './card'

export const Sport = ({navigation,route}) =>{
    const [active,setActive ] = useState(0)
    const {params} = route
    const data = [
        {name:'Армения',icone:'arrow'},
        {name:'Армения',icone:'arrow'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        {name:'Армения',icone:'stare'},
        ]
    return <View style = {styles.block}>
        <View style = {styles.header}>
           <TouchableOpacity onPress={()=>setActive(0)}> 
                <Text style = {[styles.text,active === 0 && styles.active]}>LIVE</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>setActive(1)}>
                <Text style = {[styles.text,active === 1 &&styles.active]}>Линия</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style = {{
                marginTop:10,
                paddingHorizontal:3,
                backgroundColor:'#E5EDF0',
                marginHorizontal:6,
                borderRadius:10,
                paddingVertical:10
            }} showsVerticalScrollIndicator = {false}>
            <View style = {{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                <SportSvg name={params.svg} />
                <Text style = {[styles.text,{color:'#2A2B2D'}]}>{params.title}</Text>
            </View>
            <View style = {{justifyContent:'center',width:'100%',alignItems:'center'}}>
                {data.map((elm,i)=>(
                    <Card end = {i === data.length-1} key={i} name={elm.name} count = {2} icone = {elm.icone} data = {[{},{},{},{},{}]}/>
                ))}
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

})