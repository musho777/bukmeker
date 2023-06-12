import { View,TouchableOpacity,StyleSheet,Text } from "react-native"
import {  Arrow4, } from "../../Assets/svg"

export const HorizontalBlock2 = ({icone,text1,text2,onPress = ()=>{},arrow = false}) =>{
    return <TouchableOpacity onPress ={onPress} style = {styles.block} >
        <View style = {{flexDirection:'row',alignItems:'center'}}>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                {icone}
            </View>
            <View style = {{marginHorizontal:10}}>
                <Text style = {styles.text1}>{text1}</Text>
                <Text style = {styles.title}>{text2}</Text>
            </View>
        </View>
        {arrow && <Arrow4 />}
</TouchableOpacity>
}

const styles = StyleSheet.create({
    text1:{
        color:'#2A2B2D',
        fontFamily:'Inter-Medium',
        fontSize:15,
    },
    title:{
        color:'#748189',
        fontFamily:'Inter-Medium',
        fontSize:10,
    },
    block:{
        width:'98%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:13,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        paddingVertical:12,
        backgroundColor:'#ffffff',
        marginVertical:5,
        borderRadius:15,
    }
})