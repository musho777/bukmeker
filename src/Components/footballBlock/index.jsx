import { View,Image,Text,StyleSheet,ScrollView } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { BlockHeader } from "../blockHeader"
import { Coefficient } from "../coefficient"
export const FootballBlock = ({index}) =>{
    return <View style = {[Globalstyles.sportBlock,index ===0 && {marginTop:20}]}>
        <BlockHeader name={'Чемпионат Италии. Серия А'} boll = {'tennis'} />
        <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:5}}>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Text style = {styles.title}>Сампдория</Text>
                <Image source = { require('../../Assets/images/s.png') }/>
            </View>
            <View>
                <Text style = {styles.vs}>VS</Text>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Image source = { require('../../Assets/images/s.png') }/>
                <Text style = {styles.title}>Сампдория</Text>
            </View>
        </View>
        <View style = {{justifyContent:'center',alignItems:'center',marginVertical:10,}}>
            <Text style = {styles.date}>05 : 04 : 06</Text>
            <Text style = {styles.date2}>26.05.23 10:45 PM</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
            <View>
                <Text style ={Globalstyles.confficentTitle}>1X2</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'П1'} k = {'3.98'} />
                    <Coefficient p = {'Ничья'} k = {'1.256'} />
                    <Coefficient p = {'П2'} k = {'1.256'} />
                </View>
            </View>
            <View>
                <Text style ={Globalstyles.confficentTitle}>Тотал</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'(22.5) Б'} k = {'1.97'} />
                    <Coefficient p = {'(22.5) М'} k = {'1.8'} />
                </View>
            </View>
            <View>
                <Text style ={Globalstyles.confficentTitle}>1X2</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'П1'} k = {'3.98'} />
                    <Coefficient p = {'П1'} k = {'3.98'} />
                </View>
            </View>
            <View>
                <Text style ={Globalstyles.confficentTitle}>1X2</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'П1'} k = {'3.98'} />
                    <Coefficient p = {'П1'} k = {'3.98'} />
                </View>
            </View>
            <View>
                <Text style ={Globalstyles.confficentTitle}>1X2</Text>
                <View style = {{flexDirection:'row'}}>
                    <Coefficient p = {'П1'} k = {'3.98'} />
                    <Coefficient p = {'П1'} k = {'3.98'} />
                </View>
            </View>
        </ScrollView>
    </View>
}
const styles = StyleSheet.create({
    title:{
        color:'#2A2B2D',
        fontSize:10,
        fontFamily:"Inter-Medium",
        marginHorizontal:10,
    },
    vs:{
        color:'#2A2B2D',
        fontSize:18,
        fontFamily:"Inter-SemiBold",
        marginHorizontal:10,
    },
    date:{
        color:"#748189",
        fontSize:12,
        fontFamily:"Inter-SemiBold",
        marginHorizontal:10,
    },
    date2:{
        color:"#748189",
        fontSize:12,
        fontFamily:"Inter-Regular",
        marginHorizontal:10,
    }
})