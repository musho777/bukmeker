import { Image, StyleSheet, Text, View } from "react-native"

export const CsGo = ({name}) =>{
    return <View style = {styles.block}>
        <Image style = {styles.images} source = {require('../../Assets/images/csgo.png')} />
        <Text style = {styles.text}>{name}</Text>
    </View>
}
const styles = StyleSheet.create({
    block:{
        width:80,
        height:115,
        position:'relative',
        borderRadius:10,
        marginRight:10,
    },
    images:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    text:{
        color:'#ffffff',
        fontFamily:'Inter-Medium',
        fontSize:12,
        position:'absolute',
        bottom:7,
        left:7,
    }
})