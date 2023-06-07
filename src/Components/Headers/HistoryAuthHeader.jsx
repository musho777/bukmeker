import { StyleSheet, View,TouchableOpacity,Text ,SafeAreaView} from "react-native"
import { Arrow3, Filtre, Wallet } from "../../Assets/svg"

export const HistoryAuthHeader = () =>{
    return <SafeAreaView style = {styles.header}>
            <View style = {{width:'18%'}}></View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Text style = {styles.text}>История ставок</Text>
                <Arrow3/>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center',width:'20%'}}>
                <TouchableOpacity>
                    <Filtre />
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft:10}}>
                    <Wallet />
                </TouchableOpacity>
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
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:16,
        // marginHorizontal:5,
        // width:'80%',
    },
})