import { StyleSheet, TouchableOpacity, View } from "react-native"
import { SearchInpute } from "../../../ui/Input/searchInpute"
import { Arrow } from "../../Assets/svg"

export const SearchHeader = ({onPress}) =>{
    return <View style = {styles.header}>
        <TouchableOpacity onPress={onPress}>
            <Arrow />
        </TouchableOpacity>
        <SearchInpute width={'80%'}/>
    </View>
}
const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
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