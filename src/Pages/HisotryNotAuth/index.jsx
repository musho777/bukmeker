import { StyleSheet, Text, View ,TouchableOpacity} from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { History1 } from "../../Assets/svg"

export const HisotryNotAuth = ({navigation}) =>{
    return <View style = {[Globalstyles.main]}>
        <View style = {styles.auth}>
                <Button onPress={()=>navigation.navigate('login')} width={"49%"} text = {'ВХОД'}/>
                <Button onPress={()=>navigation.navigate('registration')} width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
        </View>
        <View style = {styles.main}>
            <History1 />
            <Text style = {styles.text}>История доступна только авторизованным пользователям</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'93%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#748189',
        fontSize:14,
        fontWeight:500,
        textAlign:"center",
        marginVertical:10,
    },
    auth:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
})