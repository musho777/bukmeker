import {View,StyleSheet, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Globalstyles } from '../../../globalStyle'
import { Bolls } from '../../Assets/svg'
import { All } from '../all'
import { GameCard } from '../GameCard/GameCard'

export const GamesBlcok = ({index}) =>{
    const data = [{},{},{},{},{},{}]
    return <View style = {[Globalstyles.sportBlock,index === 0 && {marginTop:20}]}>
        <View style = {style.header}>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Bolls  name={'tableGame'}/>
                <Text style = {style.name}>Best</Text>
            </View>
            <All />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
            {data.map((elm,i)=>{
                return <GameCard key={i} name = {'Crystal'}/>

            })}
        </ScrollView>
    </View>
}
const style =  StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:33,
        alignItems:'center',
        marginBottom:20,
    },
    name:{  
        color:'#2A2B2D',
        fontWeight:500,
        fontSize:15,
        fontFamily:'Inter',
        marginHorizontal:10,
    }
})