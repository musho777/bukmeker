import {useState} from 'react'
import { StyleSheet, View,ScrollView,TouchableOpacity } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { All, FootBall, Live } from "../../Assets/svg"
import { Esports } from '../../Components/esports'
import { Football } from '../../Components/Football'
import { Games } from '../../Components/Games'
import { GameType } from '../../Components/gameType'
import { LiveCasion } from '../../Components/LiveCazino'
import { Slots } from '../../Components/Slots'
import { SportCategory } from "../../Components/sportCategory"
import { Tennis } from '../../Components/Tennis'

export const Main = ({navigation}) =>{
    const [categroy,setCategory] = useState([
        {svg:<All />,name:'Все'},
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
        {name:'Линия'},
        {name:'Esports'},
        {name:'Games'},
        {name:'Слоты'},
        {name:'Лайв казино'},
        {name:'live'},
        {name:'live'},
        {name:'live'},
    ])
    const [active,setActive] = useState(0)
    const handelChange = (i) => {
        let item = [...game]
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
                return <TouchableOpacity key={i} onPress = {()=>setActive(i)}>
                    <GameType 
                        index = {i} 
                        key={i} 
                        active = {i === active} 
                        name = {elm.name}/>
                </TouchableOpacity>
            })
            }
        </ScrollView>
            {active === 0 && 
                <Tennis />
            }
            {active === 1 &&
                <Football />
            }
            {active === 2 &&    
                <Esports />
            }
            {active === 3 &&    
                <Games />
            }
            {active === 4 &&    
                <Slots />
            }
            {active === 5 &&    
                <LiveCasion />
            }
    </View>
}
// LiveCasion
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