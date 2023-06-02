import { View,ScrollView, Text, StyleSheet } from "react-native"
import { Gamepad, LiveIcone, Popular2 } from "../../Assets/svg"
import { AnimatedList } from "../animatedList"
import { CsGo } from "../CsGo"

export const Esports = () =>{
    const data = [{},{},{},{},{},{},{},{}]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}} >
        <View style = {{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <View><Gamepad/></View>
                <Text style = {[styles.text,{marginHorizontal:10}]}>Популярные дисциплины</Text>
            </View>
            <View style = {styles.allWrapper}>
                <Text style = {styles.all}>Все</Text>
            </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator ={false} style = {{marginVertical:20}}>
            {data.map((elm,i)=>{
                return <CsGo key={i} name = 'CS:GO' />
            })}
        </ScrollView>
        <View style = {{flexDirection:'row',alignItems:'center'}}>
                <View><Popular2/></View>
                <View style = {[{marginHorizontal:10,alignItems:'center',flexDirection:'row'}]}>
                    <Text style = {[styles.text,{marginHorizontal:10}]}>Популярное LIVE</Text> 
                    <LiveIcone />
                </View>
        </View>
        <View>
            <AnimatedList />
        </View>
    </ScrollView>
}
export const styles = StyleSheet.create({
    text:{
        fontSize:15,
        fontFamily:'Inter',
        color:'#2A2B2D',
        fontWeight:500,
    },
    all:{
        color:'#40A789',
        fontWeight:500,
        fontSize:12,
        fontFamily:'Inter',
    },
    allWrapper:{
        backgroundColor: "#E3EEF0",
        borderRadius:27,
        paddingHorizontal:17,
        paddingVertical:8,
    }
})