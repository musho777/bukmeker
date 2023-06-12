import { View,Image,Text,StyleSheet } from "react-native"
import { Button } from "../../../ui/Button"

export const Qr = () =>{
    return <View style = {{width:'100%',height:'100%'}}>
        <View style = {{justifyContent:'center',alignItems:'center',marginVertical:50}}>
            <Image style = {{width:235,height:235}} source={require('../../Assets/images/QR.png')}/>
            <Text style = {styles.text}>Отсканируйте этот QR код с помощью другого устройства, чтобы поделиться приложением</Text>
        </View>
        <View style = {styles.block}>
            <Button width={'100%'} text={'ПОДТВЕРДИТЬ'}/>
        </View>
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#748189',
        fontFamily:'Inter-Medium',
        fontSize:15,
        paddingHorizontal:20,
        textAlign:'center',
        marginVertical:50,
    },
    block:{
        backgroundColor:'#FFFFFF',
        padding:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    }
})