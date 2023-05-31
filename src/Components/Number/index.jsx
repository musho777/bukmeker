import { StyleSheet,View,Text } from "react-native"

export const Number = ({number}) =>{
    return <View style = {styles.number}>
        <Text style = {styles.text}>{number}</Text>
    </View>
}

const styles = StyleSheet.create({
    number:{
        backgroundColor:'#F5F6FA',
        borderRadius:50,
        width:25,
        height:25,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#748189',
        fontSize:12,
        fontWeight:400,
    }
})