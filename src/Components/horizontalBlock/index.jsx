import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Bolls } from "../../Assets/svg"

export const HorizontalBlock = ({title,count,icone}) =>{
    return <TouchableOpacity style = {Globalstyles.sportBlock2}>
        <View style = {{flexDirection:'row',alignItems:'center'}}>
            <Bolls name={icone} />
            <Text style = {styles.title}>{title}</Text>
        </View>
        <Text style = {styles.count}>{count}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({

    count:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:12,
        backgroundColor:"#E5EDF0",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:27,
    },
    title:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontWeight:400,
        fontSize:15,
        marginHorizontal:15,
    }
})