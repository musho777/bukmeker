import { View, Text, StyleSheet } from "react-native"

export const All = ({name = 'Все'}) =>{
    return <View style = {styles.allWrapper}>
    <Text style = {styles.all}>{name}</Text>
</View>
}
const styles =  StyleSheet.create({
    allWrapper:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#E3EEF0",
        borderRadius:27,
        paddingHorizontal:17,
        paddingVertical:8,
    },
    all:{
        color:'#40A789',
        fontWeight:500,
        fontSize:12,
        fontFamily:'Inter',
    },
})