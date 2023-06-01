import {View,StyleSheet} from 'react-native'
export const TennisBlcok = ({index}) =>{
    return <View style = {[styles.block,index ===0 && {marginTop:20}]}>

    </View>
}
const styles = StyleSheet.create({
    block:{
        width:'99%',
        height:190,
        backgroundColor:'#ffffff',
        marginVertical:5,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius:8,
    }
})