import {View,StyleSheet} from 'react-native'
import { HorizontalGameScroll } from '../../Assets/svg'
export const GameType = ({name,active}) =>{
    return <View  style = {[styles.block]}>
        <HorizontalGameScroll name = {name} active = {active} />
        <View style = {active && styles.active} />
    </View>
}
const styles = StyleSheet.create({
    block:{
        height:70,
        width:65,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:25,
        position:'relative',
    },
    active:{
        borderBottomColor:'#40A789',
        borderBottomWidth:1.7,
        width:65,
        position:'absolute',
        bottom:6,
    }
})