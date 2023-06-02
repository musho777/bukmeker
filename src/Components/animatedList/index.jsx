import {useState} from 'react'
import {Image, StyleSheet, View,Text,TouchableOpacity} from 'react-native'
import { Arrow2 } from '../../Assets/svg'
import { CsGoBlcok } from '../CsGoBlock'
export const AnimatedList = ({icone,name,data}) =>{
    const [open,setOpen ] = useState(true)
    return <View style = {styles.blcok}>
        <TouchableOpacity onPress={()=>setOpen(!open)} style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
            <View style = {styles.titleWrapper}>
                <Image style = {styles.img} source={require('../../Assets/images/csgoIcone.png')}/>
                <Text style = {styles.title}>CS:GO</Text>
            </View>
            <View   style={{transform: [{rotateY: '180deg'}]}}>
                <Arrow2 />
            </View>
        </TouchableOpacity>
        {open && <View>
            <CsGoBlcok />
        </View>}
    </View>
}
export const styles = StyleSheet.create({
    blcok:{
        marginVertical:10,
        backgroundColor:"#E5EDF0",
        padding:6,
        borderRadius:10,
    },
    header:{

    },
    title:{
        fontFamily:'Inter',
        fontWeight:400,
        fontSize:14,
        color:'#2A2B2D',
        marginHorizontal:10,
    },
    titleWrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    img:{
        width:22,
        height:22,
    }
})