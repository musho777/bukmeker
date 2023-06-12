import { useState } from "react"
import { StyleSheet, View,TouchableOpacity,Text } from "react-native"
import {  } from "react-native-svg"
import { SearchInpute } from "../../../ui/Input/searchInpute"
import { Arrow, Live, Search, Touch } from "../../Assets/svg"

export const AlltypesHeader = ({onPress,goBack}) =>{
    const [openSearch,setOpenSearch] = useState(false)
    return <View style = {styles.header}>
        <View style = {styles.header1}>
            <TouchableOpacity  style = {styles.arrow} onPress={goBack}><Arrow /></TouchableOpacity>
            {!openSearch && <Text style = {styles.title}>Виды спорта</Text>}
            {openSearch && <SearchInpute />}
            <View style = {styles.icone}>
                {!openSearch && <TouchableOpacity>
                    <Search />
                </TouchableOpacity>}
                <TouchableOpacity>
                    <Touch/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Live />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles  = StyleSheet.create({
    header:{
        backgroundColor:"#FFFFFF",
        height:50,
        width:'100%',
       
    },
    title:{
        color:'#748189',
        fontSize:16,
        fontFamily:'Inter-SemiBold',
        width:'34%'
    },
    header1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%',
        marginTop:15,
        alignItems:'center',
        height:25,
    },
    icone:{
        width:'33%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    arrow:{
        width:'33%',
    },
})