import { StyleSheet, View,TouchableOpacity,Text, Image } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { Menu } from "./Menu"

export const HistoryAuth = ({navigation  }) =>{
    return <View>
        <Menu navigation = {navigation}/>
        <View style = {[Globalstyles.main,{justifyContent:'center',alignItems:'center',height:'43%'}]}>
            <Image style = {{width:120,height:120}} source={require('../../Assets/images/calendar.png')} />
            <Text style = {styles.text}>За выбранный период ставки отсутствуют. Делайте больше прогносоз и побеждайте!</Text>
            <Button text={'СДЕЛАТЬ СТАВКУ'} width ={'98%'} />
        </View>
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontSize:14,
        fontWeight:500,
        marginVertical:30,
    }
})