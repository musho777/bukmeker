import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import { BigEye } from "../../Assets/svg"

export const Tracked = () =>{
    return <View style = {{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <BigEye />
        <Text style = {styles.text}>У Вас пока нет отслеживаемых коэффициентов. Ищите лучший и выигрывайте!</Text>
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#748189',
        fontSize:14,
        fontFamily:'Inter-Medium',
        marginHorizontal:40,
        textAlign:'center',
        marginVertical:20
    }
})