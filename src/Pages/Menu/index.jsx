import {useState} from 'react'
import { StyleSheet, View,ScrollView,TouchableOpacity } from "react-native"
import { Globalstyles } from '../../../globalStyle'
import { Button } from '../../../ui/Button'
import { CalendarBg, GameBg, GamePAdeBg, KanachGhar, LiveBg, Search2, Vishnya } from '../../Assets/svg'
import { GameType } from '../../Components/gameType'
import { HorizontalBlock2 } from '../../Components/HorizontalBlock2'

export const MenuGuest = ({navigation}) =>{
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
    const [active,setActive] =useState(0)
    return <View >   
        <ScrollView style = {[{height:68},styles.scroll]} horizontal showsHorizontalScrollIndicator = {false}>

            {game.map((elm,i)=>{
                return <TouchableOpacity style = {styles.block} key={i} onPress = {()=>setActive(i)}>
                    <GameType 
                        index = {i} 
                        padding = {20}
                        key={i} 
                        active = {i === active} 
                        name = {elm.name}/>
                </TouchableOpacity>
            })}
        </ScrollView>
        <View style = {[Globalstyles.main,{marginTop:0}]}> 
            <View style = {styles.auth}>
                <Button onPress={()=>navigation.navigate('login')} width={"49%"} text = {'ВХОД'}/>
                <Button onPress={()=>navigation.navigate('registration')} width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
            </View>
            <HorizontalBlock2 icone={<LiveBg />} text1 = {'LIVE'} text2 = {'Ставь на события в прямом эфире'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
            <HorizontalBlock2 icone={<CalendarBg />} text1 = {'Линия'} text2 = {'Ставь на предстоящие события'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
            <HorizontalBlock2 icone={<GamePAdeBg />} text1 = {'Киберспорт'} text2 = {'Лучшие киберспортивные события'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
            <HorizontalBlock2 icone={<Vishnya />} text1 = {'Слоты'} text2 = {'Лучшие игровые автоматы'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
            <HorizontalBlock2 icone={<KanachGhar />} text1 = {'Лайв казино'} text2 = {'Почувствуй себя в казино'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
            <HorizontalBlock2 icone={<GameBg />} text1 = {'Games'} text2 = {'Играй и выгрывай'} onPress = {()=>navigation.navigate('Sport',{title: 'Live',svg:'live'})} />
        </View>

    </View>
}
const styles = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        height:100,
        
    },
    scroll:{
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 7,
    },  
    auth:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
})