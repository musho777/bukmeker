import {View,StyleSheet,TouchableOpacity} from 'react-native'
import { HorizontalGameScroll } from '../../Assets/svg'
export const GameType = ({name,active,changeActive,index}) =>{
    console.log(active)
    return <TouchableOpacity onPress={()=>changeActive(index)} style = {[styles.block]}>
        <HorizontalGameScroll name = {name} active = {active} />
        <View style = {active && styles.active} />
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    block:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:25,
        // marginVertical:25,
        position:'relative',
    },
    active:{
        borderBottomColor:'#40A789',
        borderBottomWidth:1.7,
        width:50,
        position:'absolute',
        bottom:-6,
        // paddingTop:10,
    }
})