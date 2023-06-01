import {useState} from 'react'
import { StyleSheet, View,ScrollView } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { FootBall, Live } from "../../Assets/svg"
import { GameType } from '../../Components/gameType'
import { SportCategory } from "../../Components/sportCategory"
import { Tennis } from '../../Components/Tennis'

export const Main = ({navigation}) =>{
    const [categroy,setCategory] = useState([
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},
        {svg:<FootBall />,name:'Футбол'},

    ])
    const [game,setGame] = useState([
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
    ])
    const [active,setActive] = useState(0)
    const handelChange = (i) => {
        let item = [...game]
        // const prevActive = item.findIndex()s
    }
    return <View style = {Globalstyles.main}>
        <View style = {styles.auth}>
            <Button onPress={()=>navigation.navigate('login')} width={"49%"} text = {'ВХОД'}/>
            <Button onPress={()=>navigation.navigate('registration')} width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
        </View>
        <ScrollView style = {styles.horizontalScroll} horizontal showsHorizontalScrollIndicator = {false}>
            {categroy.map((elm,i)=>{
                return  <SportCategory key={i} svg = {elm.svg } name = {elm.name} />
            })}
        </ScrollView>
        <ScrollView style = {{borderBottomWidth:0.5,borderColor:'#40A789',marginBottom:0}} horizontal showsHorizontalScrollIndicator = {false}>
            {game.map((elm,i)=>{
                return <GameType changeActive = {(e)=>setActive(e)} index = {i} key={i} active = {i === active} name = {elm.name}/>
            })
            }
        </ScrollView>
            
            <Tennis />
    </View>
}
const styles  = StyleSheet.create({
    auth:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    horizontalScroll:{
        marginTop:20,
        height:100,
        flexDirection:'row',
    }
})