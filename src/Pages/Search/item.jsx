import { Image, StyleSheet, Text, View } from "react-native"

export const Item = ({name}) =>{
    return <View style = {styles.item}>
        <Image source={require('../../Assets/images/1.png')} />
        <Text style = {styles.text}>{name}</Text>
    </View>
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:27,
        flexDirection:'row',
        marginHorizontal:4,
        marginVertical:7,
    },
    text:{
        fontFamily:'Inter-Medium',
        fontSize:12,
        color:'#2A2B2D',
        marginHorizontal:5,
    }
})