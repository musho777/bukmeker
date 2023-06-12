import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Arrow, Wallet } from "../../Assets/svg"

export const ExpressHeader = ({onPress}) =>{
    return <View style = {styles.header}>
        <TouchableOpacity onPress={onPress}>
            <Arrow />
        </TouchableOpacity>
        <Text style = {styles.text}>Экспресс дня</Text>
        <View>
            <Wallet />
        </View>
    </View>
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        height:60,
        backgroundColor:'#FFFFFF'
    },
    text:{
        color:'#748189',
        fontFamily:'Inter-SemiBold',
        fontSize:16
    }
})