import { StyleSheet, View } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"

export const Main = () =>{
    return <View style = {Globalstyles.main}>
        <View style = {styles.auth}>
            <Button width={"49%"} text = {'ВХОД'}/>
            <Button width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
        </View>
    </View>
}
const styles  = StyleSheet.create({
    auth:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})