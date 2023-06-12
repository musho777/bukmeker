import {useState} from 'react'
import { StyleSheet, View,ScrollView,TouchableOpacity ,Text} from "react-native"
import { Globalstyles } from '../../../globalStyle'
import { Button } from '../../../ui/Button'
import { CalendarBg, GameBg, GamePAdeBg, KanachGhar, LiveBg, MenuIcone, Search2, Vishnya } from '../../Assets/svg'
import { GameType } from '../../Components/gameType'
import { HorizontalBlock2 } from '../../Components/HorizontalBlock2'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const MenuGuest = ({navigation}) =>{
    const [game,setGame] = useState([
        {name:'Топ'},
        {name:'Спорт'},
        {name:'Казино'},
        {name:'Games'},
        {name:'Разное'},
    ])
    const [active,setActive] =useState(0)
    return <View >   
        <ScrollView style = {[{height:60},styles.scroll]} horizontal showsHorizontalScrollIndicator = {false}>
            {game.map((elm,i)=>{
             return  <TouchableOpacity style = {[styles.block,active === i && {borderBottomWidth:2,borderBottomColor:'#40A789'}]} key={i} onPress = {()=>setActive(i)}>
                    <MenuIcone active ={active===i} title={elm.name} />
                    <Text style = {[styles.text ,active===i && {color:'#40A789'}]}>{elm.name}</Text>
                </TouchableOpacity>

            })

            }
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
        height:58,
        width:windowWidth/5,
        marginBottom:20,
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
    text:{
        fontSize:9,
        fontFamily:'Inter-Medium',
        color:'#748189',
    }
})