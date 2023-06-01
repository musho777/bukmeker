import {View,StyleSheet,Text} from 'react-native'
export const SportCategory = ({svg,name}) =>{
    return <View style = {styles.block}>
        <View style = {styles.svg}>
            {svg}
            <Text style = {styles.name}>{name}</Text>
        </View>

    </View>
}
const styles = StyleSheet.create({
    block:{
        width:55,
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:8,
        marginHorizontal:4,
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
        fontWeight:500,
        fontSize:9,
        fontFamily:'Inter'
    }
})