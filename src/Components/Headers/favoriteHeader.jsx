import { Text, View,ImageBackground,StyleSheet, TouchableOpacity } from "react-native"
import { OpenEye } from "../../Assets/svg"

export const FavoriteHeader = () =>{
    return <View style = {styles.header}>
        <View />
        <Text style = {styles.text}>Избранное</Text>
        <OpenEye />
    </View>
}

const styles = StyleSheet.create({
    header:{    
        backgroundColor:'#ffffff',
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        
    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:16
    },
})