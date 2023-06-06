import { StyleSheet, View,TouchableOpacity,Text, Image } from "react-native"
import { Arrow } from "../../Assets/svg"

export const GenereateTicketHeader = ({onPress}) =>{
    return <View style = {styles.block}>
            <View style = {styles.header}>
                <TouchableOpacity onPress={onPress}>
                    <Arrow />
                </TouchableOpacity>
                <Text style = {styles.text}>Генерация купона</Text>
                <View></View>
            </View>
            <View style = {{paddingBottom:30,justifyContent:'center',alignItems:'center'}}>
                <Image  style = {{width:160,height:160}} source={require('../../Assets/images/5.png')}/>
            </View>
    </View>
}
const styles = StyleSheet.create({
    header:{
        marginVertical:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:16
    },
    block:{
        width:'100%',
        paddingHorizontal:15,
    }
})