import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import { Bolls } from "../../Assets/svg"

export const HorizontalBlock = ({title,count,icone}) =>{
    return <TouchableOpacity style = {styles.block}>
        <View style = {{flexDirection:'row',alignItems:'center'}}>
            <Bolls name={icone} />
            <Text style = {styles.title}>{title}</Text>
        </View>
        <Text style = {styles.count}>{count}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    block:{
        width:'98%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        height:60,
        backgroundColor:'#ffffff',
        marginVertical:2,
        borderRadius:15,
    },
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