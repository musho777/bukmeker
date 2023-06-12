import { StyleSheet, View,TouchableOpacity,Text,Dimensions } from "react-native"
import { Button } from "../../../ui/Button"
import { Input } from "../../../ui/Input"

export const ConfirmPassword = () =>{
    return <View style = {styles.block}>
        <View style = {{paddingHorizontal:20}}>
            <Text style = {styles.text}>Вы авторизуетесь из нового места. Вам был выслан код в sms на 61....33.</Text>
            <Input paddingVertical = {10}  type="numeric" placeholder={'Введите ответ'} width={'100%'}/>
        </View>
        <View style = {{position:'absolute',paddingVertical:25,bottom:0,width:'100%',paddingHorizontal:20}}>
            <Button disable={true}  text={'ПОДТВЕРДИТЬ'} width = {'100%'}/>
        </View>
    </View>
}
export const styles = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%',
        height:'100%',
        // paddingHorizontal:20
    },
    text:{
        color:'#2A2B2D',
        fontFamily:'Inter-Medium',
        fontSize:15,
        marginVertical:15,
        marginBottom:15,
    },
})