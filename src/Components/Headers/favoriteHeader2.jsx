import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import { Arrow } from "../../Assets/svg"

export const FavoryteHEader2 = ({onPress,back = true,title = 'Избранное'}) =>{
    return <View style = {styles.header}>
        <TouchableOpacity onPress={onPress}>
            {back && <Arrow />}
        </TouchableOpacity>
        <Text style = {styles.text}>{title}</Text>
        <View></View>
    </View>
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15,

    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:16
    },
})