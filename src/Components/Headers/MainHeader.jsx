import { StyleSheet, SafeAreaView } from "react-native"
import { Search } from "../../Assets/svg"

export const MainHeader = () =>{
    return <SafeAreaView style = {styles.header}>
        <Search/>
    </SafeAreaView>
}
const styles  = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingHorizontal:20,
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