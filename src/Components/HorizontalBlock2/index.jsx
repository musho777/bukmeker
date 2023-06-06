import { View,TouchableOpacity,StyleSheet,Text } from "react-native"

export const HorizontalBlock2 = ({icone,text1,text2,onPress = {}}) =>{
    return <TouchableOpacity onPress ={onPress} style = {styles.block} >
        <View style = {{flexDirection:'row',alignItems:'center'}}>
            {icone}
        </View>
        <View style = {{marginHorizontal:10}}>
            <Text style = {styles.text1}>{text1}</Text>
            <Text style = {styles.title}>{text2}</Text>
        </View>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    text1:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:15,
    },
    title:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:10,
    },
    block:{
        width:'98%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
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