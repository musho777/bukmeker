import { StyleSheet, Text, View,TouchableOpacity } from "react-native"

export const Items = ({icon,name,data}) =>{
    return <View style = {styles.body}>
        {name  && <Text style = {styles.text}>{name}</Text>}
        <View>
            {data.map((elm,i)=>(
                <TouchableOpacity onPress={elm.onPress && elm.onPress} disabled = {elm.disabled} key={i} style = {[elm.disabled && {opacity:0.4},{flexDirection:'row',alignItems:'center',marginVertical:10,},,elm.text3 && {justifyContent:'space-between'}]}>
                    <View style = {[{flexDirection:'row',alignItems:'center'}]}>
                        {elm.icon}
                        <View style = {{justifyContent:'center'}}>
                            <Text style = {[styles.text2,elm.color && {color:elm.color}]}>{elm.text}</Text>
                            {elm.text2 && <Text style = {styles.text3}>{elm.text2}</Text>}
                        </View>
                    </View>
                        <Text style = {[styles.text2,elm.color ?{ color:'#748189'}:{color:elm.color}]}>{elm.text3}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#40A789',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:14,
    },
    body:{
        backgroundColor:'#FFFFFF',
        marginVertical:10,
        padding:15,
    },
    text2:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:14,
        marginHorizontal:10,
    },
    text3:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:10,
        marginHorizontal:10,
    }
})