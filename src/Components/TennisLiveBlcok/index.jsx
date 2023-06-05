import {View,StyleSheet,Text,ScrollView} from 'react-native'
import { Globalstyles } from '../../../globalStyle'
import { Player } from '../../Assets/svg'
import { BlockHeader } from '../blockHeader'
import { Coefficient } from '../coefficient'
export const TennisLiveBlock = ({index,lastIndex}) =>{
    return <View style = {[Globalstyles.sportBlock,index ===0 && {marginTop:20}]}>
        <BlockHeader name = {'АТР.Женева'} boll = {'tennis'} />
        <View style = {styles.timeBlock}>
            <Text style = {{color:'#748189',fontSize:10,fontFamily:"Inter",fontWeight:500}}>Итёт 2-ий сет</Text>
            <View style = {styles.game}>
                <Text style = {styles.gameText}>Гейм</Text>
                <Text style = {styles.gameText}>2</Text>
                <Text style = {styles.gameText}>Итог</Text>
            </View>
        </View>
        <View style = {styles.gamer}>
            <View style = {{justifyContent:'space-between',height:55}}>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <View><Player/></View>
                    <Text style = {[styles.gameText,{marginHorizontal:10}]}>Григор Димитров</Text>
                </View>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <View><Player/></View>
                    <Text style = {[styles.gameText,{marginHorizontal:10}]}>Тейлор Герри Фритц</Text>
                </View>
            </View>
            <View style = {{height:55,justifyContent:'space-between'}}>
                <View style = {styles.pointWrapper}>
                    <Text style = {[styles.points,{color:"#748189"}]}>0</Text>
                    <Text style = {[styles.points,{color:"#748189"}]}>5</Text>
                    <Text style = {styles.points}>0</Text>
                </View>
                <View style = {styles.pointWrapper}>
                    <Text style = {styles.points}>0</Text>
                    <Text style = {[styles.points]}>4</Text>
                    <Text style = {styles.points}>1</Text>
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
    timeBlock:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
    },
    game:{
        flexDirection:'row',
        width:80,
        justifyContent:'space-between',
        alignItems:'center',
    },
    gameText:{
        color:'#2A2B2D',
        fontSize:10,
        fontFamily:"Inter",
        fontWeight:500,
    },
    
    gamer:{
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
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
        width:80,
    },
    coefficient:{
        height:75
    }
})