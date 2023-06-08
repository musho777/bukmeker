import { StyleSheet, View,TouchableOpacity,Text } from "react-native"
import { Arrow, DefUser, Settings } from "../../Assets/svg"

export const FavoryteHEader2 = ({title = 'Избранное',settings,user,navigation,back,onPress}) =>{

    return <View style = {styles.header}>
        <TouchableOpacity onPress = {onPress}>
            {back && <Arrow />}
        </TouchableOpacity>
        <Text style = {styles.text}>{title}</Text>
        <View>
            {settings &&
                <TouchableOpacity onPress={()=>navigation.navigate('Settings1')}>
                    <Settings />
                </TouchableOpacity>
            }
            {user && 
                <DefUser />
            }
        </View>
    </View>
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15,

    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:16
    },
})