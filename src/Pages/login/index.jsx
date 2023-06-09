import { useState } from 'react'
import { Text, View,ImageBackground,StyleSheet, TouchableOpacity } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { Input } from "../../../ui/Input"
import img from '../../Assets/images/back.png'
import { MobileIcone } from '../../Assets/svg'
export const Login = ({navigation}) =>{
    const [data,setData] = useState([
        {value:''},
        {value:''}
    ])
    const handelChange = (e,i) =>{
        let item = [...data]
        data[i].value = e
        setData(item)

    }
    return < >
        <ImageBackground  style = {Globalstyles.Bgimage} source={img} resizeMode="cover">
            <View style = {Globalstyles.body}>
                <View style = {styles.inputWrapper}>
                    <Input onChange = {(e)=>handelChange(e,0)} value = {data[0].value} placeholder = 'E-mail или ID' width='90%' />
                    <View style = {styles.mobileIcone}>
                        <MobileIcone />
                    </View>
                </View>
                <View >
                    <Input onChange = {(e)=>handelChange(e,1)} value = {data[1].value} placeholder = 'Пароль' secure />
                </View>
                <View style = {{marginVertical:30}}>
                    <Button text={'ВОЙТИ'}></Button>
                </View>
                <Text style = {styles.forgotPassword}>Забыли пароль?</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('registration')} style = {{backgroundColor:'#40A789',height:50,justifyContent:'center',alignItems:'center'}}>
                <Text style = {{fontSize:14,fontFamily:'Inter-Medium',color:'#F5F6FA'}}>РЕГИСТРАЦИЯ</Text>
            </TouchableOpacity>
        </ImageBackground>
    </>
}
const styles = StyleSheet.create({
    inputWrapper:{
        position:'relative',
        marginVertical:50,
    },
    mobileIcone:{
        position:'absolute',
        right:-5,
        top:-5,
    },
    forgotPassword:{
        fontFamily:'Inter-Medium',
        fontSize:16,
        textAlign:'center',
        color:'#40A789'
    }
})