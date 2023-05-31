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
        paddingHorizontal:20
    }
})