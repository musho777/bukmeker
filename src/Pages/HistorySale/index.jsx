import { StyleSheet, View,Image,Text } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { Menu } from "../HistoryAuth/Menu"

export const HistorySale = ({navigation}) =>{
    return <View>
        <Menu open = {false} navigation ={navigation}/>
        <View style = {[Globalstyles.main,{justifyContent:'center',alignItems:'center',height:'75%'}]}>
            <Image style = {{width:120,height:120}} source={require('../../Assets/images/sale.png')} />
            <Text style = {styles.text}>За выбранный период ставки отсутствуют. Делайте больше прогносоз и побеждайте!</Text>
            <Button text={'СДЕЛАТЬ СТАВКУ'} width ={'98%'} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    text:{
        color:'#748189',
        fontFamily:'Inter-Medium',
        fontSize:14,
        marginVertical:30,
    }
})