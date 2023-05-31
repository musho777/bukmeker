import { View,Text,StyleSheet } from 'react-native'
import { Arrow } from '../../Assets/svg'
export const LoginHeader = ({text}) =>{
    return <View style = {styles.header}>
        <View style = {{position:'absolute',left:20}}>
            <Arrow />
        </View>
        <Text style = {styles.text}>{text}</Text>
    </View>
}
const styles  = StyleSheet.create({
    header:{
        height:60,
        justifyContent:'center',
        position:'relative'
    },
    text:{
        color:'#748189',
        fontSize:18,
        fontFamily:"Inter",
        fontStyle:"normal", 
        fontWeight:500,
        textAlign:'center'
    }
})