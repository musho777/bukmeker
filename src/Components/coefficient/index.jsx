import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

export const Coefficient = ({p,k}) =>{
    return <TouchableOpacity style = {styles.block}>
        <Text style = {styles.p}>{p}</Text>
        <Text  style = {styles.k}>{k}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    p:{
        fontFamily:'Inter-Medium',
        fontSize:12,
        color:'#748189',
        marginRight:10,
    },
    k:{
        fontFamily:'Inter-Medium',
        fontSize:12,
        color:'#2A2B2D'
    },
    block:{
        paddingHorizontal:10,
        height:34,
        backgroundColor:'#F5F6FA',
        borderRadius:8,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})