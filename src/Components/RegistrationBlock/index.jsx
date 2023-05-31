import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RegBlock } from "../../Assets/svg"

export const RegistrationBlock = ({icon,text,title}) =>{
    return <TouchableOpacity style = {styles.block}>
        <View style = {{marginHorizontal:15}}>
            <RegBlock  title = {title}/>
        </View>
        <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
}
const styles  = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        height:65,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    text:{
        fontSize:15,
        fontWeight:500,
        color:'#2A2B2D',
        
    }
})