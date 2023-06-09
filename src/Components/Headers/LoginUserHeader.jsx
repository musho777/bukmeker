import { StyleSheet, View,TouchableOpacity,Text ,SafeAreaView} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { Button } from "../../../ui/Button"
import { DefUser,  DropDownIcon,  Message2, Settings, WalletReload } from "../../Assets/svg"

export const LoginUSerHeader = () =>{
    return <View style = {styles.block}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style = {styles.user}>
                <DefUser />
                <View style = {styles.idWrapper}>
                    <Text style = {styles.text}>id: 441134711</Text>
                    <Text style = {styles.text2}>Личные данные</Text>
                </View>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
                <View style = {{marginHorizontal:15}}>
                    <Message2 />
                </View>
                <Settings />
            </View>
        </View>
        <View style = {{marginVertical:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
            <View style = {{flexDirection:'row',alignItems:'center',backgroundColor:'#F5F6FA',paddingHorizontal:10,borderRadius:6,width:'60%'}}>
                <View style = {{borderRightWidth:1,borderColor:'#CFCFCF',paddingRight:10}}>
                    <WalletReload />
                </View>
                <SelectDropdown 
                        renderDropdownIcon = {()=><DropDownIcon />}
                        defaultButtonText = {'0 TMTM'}
                        buttonStyle = {[styles.DropDownStyle,{height:40,width:'85%'}]}
                        buttonTextStyle = {{
                            color:'#2A2B2D',
                            textAlign:"left",
                            left:5,fontSize:18
                        }}
                    />
            </View>
            <Button text={'+ Пополнить'} width ={107} />
        </View>
    </View>
}
const styles = StyleSheet.create({
    block:{
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingTop:20,
    },
    user:{
        flexDirection:'row',
        alignItems:'center',
    },
    idWrapper:{
        marginHorizontal:10,
    }, 
    text:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:12,
    },
    text2:{
        color:'#40A789',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:9,
    },
    DropDownStyle:{
        backgroundColor:'#F5F6FA',
        borderBottomColor:'#748189',
    },
})