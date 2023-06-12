import { Text, View,ImageBackground,StyleSheet, TouchableOpacity } from "react-native"
import { OpenEye } from "../../Assets/svg"

export const FavoriteHeader = ({navigation}) =>{
    return <View style = {styles.header}>
        <View />
        <Text style = {styles.text}>Избранное</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Tracked')}>
            <OpenEye />
        </TouchableOpacity>
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
        fontFamily:'Inter-SemiBold',
        fontSize:16
    },
})