import { useState } from "react"
import { StyleSheet, View,ScrollView,TouchableOpacity,Text } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Arrow2, Flugs, Stare } from "../../Assets/svg"

export const Card = ({name,count,icone,data,end}) =>{
    const [open,setOpen] = useState(false)
    return <View style = {[{width:'100%',justifyContent:'center',alignItems:'center'},end && {marginBottom:80}]}> 
        <TouchableOpacity  onPress={()=>setOpen(!open)} style = {[Globalstyles.sportBlock2,open && {borderBottomEndRadius:0,borderBottomStartRadius:0}]}>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Flugs name={name}/>
                <Text style = {styles.text}>{name}</Text>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Text style = {[Globalstyles.count,{}]}>{count}</Text>
                {icone === 'arrow' ? 
                <View style = {{marginHorizontal:10}}>
                    <Arrow2 />
                </View>:
                <View style = {{marginHorizontal:7}}>
                    <Stare />
                </View>
                }
            </View>
        </TouchableOpacity>
        {open && 
            <View style = {styles.blocView}>
                {data.map((elm,i)=>(
                    <TouchableOpacity style = {styles.block} key={i}>
                       <View style = {{flexDirection:'row',alignItems:'center'}}>
                            <Flugs name={name}/>
                            <Text style = {styles.text}>{name}</Text>
                        </View>
                        <View style = {{flexDirection:'row',alignItems:'center'}}>
                            <Text style = {[Globalstyles.count,{marginHorizontal:10}]}>{count}</Text>
                            <Stare />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        }
    </View>
}
const styles = StyleSheet.create({
    text:{
        color:'#2A2B2D',
        fontFamily:'Inter-Regular',
        fontSize:15,
        marginHorizontal:15,
    },
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
    },
    blocView:{
        paddingHorizontal:10,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        marginBottom:20,
        width:'98%',
        marginTop:-2,
        backgroundColor:'#F5F6FA',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        paddingVertical:8,
        
    }
})