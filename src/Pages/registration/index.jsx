import { Text, TouchableOpacity, View,ImageBackground } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import img from '../../Assets/images/back.png'
import { RegistrationBlock } from "../../Components/RegistrationBlock"

export const Registration = ({navigation}) =>{
    return <>
        <ImageBackground style = {Globalstyles.Bgimage} source={img} resizeMode="cover">
            <View style = {Globalstyles.body}>
                <RegistrationBlock title text={'По телефону'}/>
                <RegistrationBlock text={'Полная'}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('login')} style = {{backgroundColor:'#40A789',height:50,justifyContent:'center',alignItems:'center'}}>
                <Text style = {{fontSize:14,fontFamily:'Inter',color:'#F5F6FA',fontWeight:500}}>АВТОРИЗАЦИЯ</Text>
            </TouchableOpacity>
        </ImageBackground>
    </>
}