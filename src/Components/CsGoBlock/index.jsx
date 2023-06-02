import { View,ScrollView, Text, StyleSheet } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { DefaultUser } from "../../Assets/svg"
import { BlockHeader } from "../blockHeader"
import { Coefficient } from "../coefficient"

export const CsGoBlcok = () =>{
    return <View style = {Globalstyles.sportBlock}>
        <BlockHeader type="" boll={'gamepad'} name={'CS:GO. European Pro League'}/>
        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
            <Text style = {styles.text1}>Best of 3 maps, Идёт 2-я карта</Text>
            <View style = {{width:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style = {styles.text2}>2</Text>
                <Text style = {styles.text2}>Итог</Text>
            </View>
        </View>
        <View style = {{justifyContent:'space-between',flexDirection:'row',height:55,marginVertical:10,}}>
            <View style = {{justifyContent:'space-between'}}>
                <View style = {styles.players}>
                    <DefaultUser />
                    <Text style = {[styles.text2,{marginHorizontal:5}]}>ENCE Academy</Text>
                </View >
                <View style = {styles.players}>
                    <DefaultUser />
                    <Text style = {[styles.text2,{marginHorizontal:5}]}>Dynamo Eclot</Text>
                </View>
            </View>
            <View style = {{justifyContent:'space-between'}}>
                <View style = {styles.pointWrapper}>
                    <Text style = {[styles.points,{color:"#748189"}]}>10</Text>
                    <Text style = {[styles.points,{color:"#2A2B2D"}]}>1</Text>
                </View>
                <View style = {styles.pointWrapper}>
                    <Text style = {[styles.points,{color:"#748189"}]}>14</Text>
                    <Text style = {[styles.points,{color:"#2A2B2D"}]}>0</Text>
                </View>
            </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {styles.coefficient}>
            <View>
                <Text style ={Globalstyles.confficentTitle}>1X2</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'П1'} k = {'3.98'} />
                    <Coefficient p = {'П2'} k = {'1.256'} />
                </View>
            </View>
        </ScrollView>
    </View>
}
const styles  = StyleSheet.create({
    text1:{
        color:'#748189',
        fontFamily:'Inter',
        fontSize:10,
        fontWeight:500,
    },
    text2:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontSize:10,
        fontWeight:500,
    },
    players:{
        flexDirection:'row',
        alignItems:'center',
    },
    points:{
        backgroundColor:'#E1EDE9',
        width:22,
        height:22,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        color:'#2A2B2D',
        textAlign:'center',
    },
    pointWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:50,
    },
})