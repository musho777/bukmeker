import {View,StyleSheet,Text, TouchableOpacity} from 'react-native'
export const SportCategory = ({svg,name,navigation,title,title2}) =>{
    return <TouchableOpacity style = {styles.block} onPress={()=>navigation.navigate(title, {title: name,svg:title2})}>
        <View style = {styles.svg}>
            {svg}
            <Text style = {styles.name}>{name}</Text>
        </View>

    </TouchableOpacity>
}
const styles = StyleSheet.create({
    block:{
        width:55,
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:8,
        marginHorizontal:4,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    svg:{
        justifyContent:'center',
        alignItems:'center',
        width:55,
        height:60,
    },
    name:{
        color:'#2A2B2D',
        fontSize:9,
        fontFamily:'Inter-Medium'
    }
})