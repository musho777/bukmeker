import {useRef,useCallback,useMemo} from 'react'
import { StyleSheet, View,TouchableOpacity,Text ,SafeAreaView} from "react-native"
import { Arrow3, Filtre, Wallet } from "../../Assets/svg"
import { FiltreBotomSheet } from '../../Pages/HistoryAuth/filtreBotomSheet'
import { BootomModal } from "../BootomSheet"

export const HistoryAuthHeader = () =>{
    const bottomSheetRef = useRef(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
      }, []);
    const snapPoints = useMemo(() => ['85%'], []);
    return <SafeAreaView >
        <View style = {styles.header}>
            <View style = {{width:'18%'}}></View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Text style = {styles.text}>История ставок</Text>
                <Arrow3/>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center',width:'20%'}}>
                <TouchableOpacity onPress={()=>handlePresentModalPress()}>
                    <Filtre />
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft:10}}>
                    <Wallet />
                </TouchableOpacity>
            </View>
        </View>
        <View style = {{position:'absolute'}}>
        <BootomModal ref = {bottomSheetRef} snapPoints = {snapPoints}>
            <FiltreBotomSheet />
        </BootomModal>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15,
    },
    text:{
        color:'#748189',
        fontFamily:'Inter-SemiBold',
        fontSize:16,
    },
})