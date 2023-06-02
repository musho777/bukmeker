import { StyleSheet, View,Text,Image } from "react-native"

export const SlotsBlock = ({name1,name2}) =>{
    return <View style = {styles.block}>
            <Image style = {styles.img} source={require('../../Assets/images/card.png')}/>
        <View style = {styles.textWrapper}>
            <Text style = {styles.text1}>{name1}</Text>
            <Text style = {styles.text2}>{name2}</Text>
        </View>
    </View>
}
export const styles = StyleSheet.create({
    block:{
        width:160,
        height:135,
        marginRight:10,
    },
    img:{
        width:'100%',
        height:90,
        borderRadius:10,
    },
    textWrapper:{
        width:'100%',
        height:45,
    },
    text1:{
        color:'#2A2B2D',
        fontWeight:500,
        fontSize:12,
        fontFamily:'Inter',
        marginTop:5,
        marginBottom:2,
    },
    text2:{
        color:'#748189',
        fontWeight:500,
        fontSize:10,
        fontFamily:'Inter',
    }
})