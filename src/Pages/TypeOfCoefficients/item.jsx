import { StyleSheet, View,TouchableOpacity,Text } from "react-native"
import { NotChecketRadioButton, RadioButton } from "../../Assets/svg"

export const Item = ({text1,text2,selected,onPress}) =>{
    return <TouchableOpacity onPress={onPress} style = {styles.block}>
        <View>
            <Text style = {[styles.text,selected && {color:'#40A789'}]}>{text1}</Text>
            <Text style = {[styles.text,{fontSize:15,color:'#2A2B2D'},selected && {color:'#40A789'}]}>{text2}</Text>
        </View>
        <View>
            {!selected?
                <NotChecketRadioButton />:
                <RadioButton />
            }
        </View>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    block:{
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
        width:'47%',
        justifyContent:'space-between',
    },
    text:{
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:12,
        color:'#748189',
    }
})