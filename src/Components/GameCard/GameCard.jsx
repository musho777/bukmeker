import { View,StyleSheet,Image,Text} from "react-native"

export const GameCard = ({name}) =>{
    return <View style = {styles.blcok}>
        <Image style = {styles.img}  source={require('../../Assets/images/card.png')}/>
        <Text style = {styles.name}>{name}</Text>
    </View>
}
const styles  = StyleSheet.create({
    blcok:{
        width:90,
        height:110,
        marginRight:10,
    },
    img:{
        width:'100%',
        height:90,
        borderRadius:20,
    },
    name:{
        color:'#2A2B2D',
        fontSize:12,
        fontFamily:'Inter-Medium',
        textAlign:'center',
    }
})