import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { Bells, Bolls, Play, Stare } from '../../Assets/svg'
export const BlockHeader = ({name,boll,type ='stare',svg = true}) =>{
    return <View style = {styles.block}>
        <View style  = {styles.title}>
            <Bolls name = {boll}/>
            <Text style = {styles.text}>{name}</Text>
        </View>
        {svg && <View style = {styles.svg}>
            <TouchableOpacity style = {{marginHorizontal:10}}>
                {type ==='stare' ?
                    <Bells />:
                    <Play />
                }
            </TouchableOpacity>
            <TouchableOpacity >
                <Stare />
            </TouchableOpacity>
        </View>}
    </View>
}
const styles  = StyleSheet.create({
    block:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    svg:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontSize:12,
        fontWeight:500,
        marginHorizontal:10,
    }
})