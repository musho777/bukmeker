import {useRef,useCallback, useMemo} from 'react'
import { StyleSheet, View,TouchableOpacity,Text} from "react-native"
import { Add, Arrow3, Calendar, Sale } from "../../Assets/svg"
import { BootomModal } from "../../Components/BootomSheet"
import { BootomsheetAllBalance } from './bootomsheetAllBalance'
import { BootomSheetMount } from './bootomSheetMount'

export const Menu = ({navigation,open = true}) =>{
    const bottomSheetRef = useRef(null);
    const allRef = useRef(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
      }, []);
      const handlePresentAllModalPress = useCallback(() => {
        allRef.current?.present();
      }, []);
    const snapPoints = useMemo(() => ['25%'], []);
    return <View>
    <View style = {styles.main}>
        <Text style = {styles.text}>Основоной</Text>
        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style = {styles.text1}>0 TMTM</Text>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>handlePresentAllModalPress()}>
                    <Text style = {styles.all}>Все счета</Text>
                </TouchableOpacity>
                <Arrow3 />
            </View>
        </View>
        {open  && <View style = {styles.menu}>
            <TouchableOpacity style = {styles.item} onPress ={()=>handlePresentModalPress()}>
                <Calendar />
                <Text style = {[styles.text,{marginTop:5}]}>За месяц</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.item} onPress = {()=>navigation.navigate('HistorySale')}>
                <Sale />
                <Text style = {[styles.text,{marginTop:5}]}>Продажа</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.item}>
                <Add />
                <Text style = {[styles.text,{marginTop:5}]}>Пополнить</Text>
            </TouchableOpacity>
        </View>}
    </View>
        <BootomModal ref = {bottomSheetRef} snapPoints = {snapPoints}>
            <BootomSheetMount/>    
        </BootomModal> 
        <BootomModal  ref = {allRef} snapPoints = {snapPoints}>
            <BootomsheetAllBalance />
        </BootomModal>
    </View>
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
        paddingHorizontal:10,
    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontSize:10,
        fontWeight:500,
    },
    text1:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontSize:28,
        fontWeight:500,
    },
    all:{
        color:'#40A789',
        fontSize:12,
        fontFamily:"Inter",
        fontWeight:500,
        marginHorizontal:3,
    },
    menu:{
        backgroundColor:'#F5F6FA',
        paddingHorizontal:30,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        marginVertical:10,
    },
    item:{
        alignItems:'center',
    }
})