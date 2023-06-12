import { useState } from "react"
import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { Globalstyles } from "../../../globalStyle"
import { ButtonWhiteIcon } from "../../../ui/Button/ButtonWhiteIcon"
import { Input } from "../../../ui/Input"
import { Checkded, DropDownIcon, Info, NotChecked, RegBlock } from "../../Assets/svg"
import { Number } from "../../Components/Number"
const { width,height } = Dimensions.get('window');

export const RegistrationWhitePhone = () =>{
    const [checked,setChecked] = useState(false)
    return <View>
        <View style = {Globalstyles.block}>
            <View style = {{height:100,marginLeft:30,flexDirection:'row',alignItems:'center'}}>
                <RegBlock  title = {true}/>
                <Text style = {styles.text}>По телефону</Text>
            </View>
            <View style ={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:20}}>
                <View style = {styles.active} />
                <View style = {styles.inActive} />
            </View>
        </View>
        <View style = {styles.inputBlock}>
            <View style = {styles.InputWrapper}>
                <Number number={1}/>
                <View>
                    <Text style = {{color:'#748189'}}>Код*</Text>
                    <SelectDropdown 
                        renderDropdownIcon = {()=><DropDownIcon />}
                        defaultButtonText = {' '}
                        buttonStyle = {[styles.DropDownStyle,{width:70}]}
                    />
                </View>
                <Input  type="numeric" placeholder={'Номер телефона*'} width={width-180}/>
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={2}/>
                    <SelectDropdown 
                        renderDropdownIcon = {()=><DropDownIcon />}
                        defaultButtonText = {'Валюта*'}
                        buttonStyle = {[styles.DropDownStyle,{width:'85%',}]}
                        buttonTextStyle = {{
                                color:'#748189',
                                textAlign:"left",
                                left:15,fontSize:18
                        }}
                />
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={3}/>
                    <SelectDropdown 
                        renderDropdownIcon = {()=><DropDownIcon />}
                        defaultButtonText = {'Выбор бонуса'}
                        buttonStyle = {[styles.DropDownStyle,{width:'85%',borderBottomColor:'#C1C6C9',}]}
                        buttonTextStyle = {{
                            color:'#C1C6C9',
                            textAlign:"left",
                            left:15,fontSize:18
                        }}
                        disabled
                />
            </View>
           
            <View  style = {{flexDirection:'row',justifyContent:'space-between',justifyContent:'space-between',alignItems:'center',marginVertical:20}}>
                {checked ?
                    <TouchableOpacity onPress={()=>setChecked(false)}>
                        <Checkded />
                    </TouchableOpacity>:
                    <TouchableOpacity onPress={()=>setChecked(true)}>
                        <NotChecked />
                    </TouchableOpacity>
                }
                <Text style = {{color:'#748189',fontSize:14,fontFamily:'Inter-Regular'}}>
                        Вы потдверждаете, что ознакомились и 
                        соглашаетесь с правилами и политикой
                        конфиденцияльности компании, а 
                        также подтверждаете свое
                        совершеннолетие
                    </Text>
            </View>
            <View style = {{flexDirection:'row'}}>
                <Info />
                <Text style = {{marginHorizontal:30,color:'#40A789',fontSize:14,fontFamily:'Inter-Regular'}}>Правила компании</Text>
            </View>
            <View style = {{position:'absolute',right:20,bottom:40}}>
                <ButtonWhiteIcon />
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    text:{
        fontFamily:'Inter-Medium',
        fontSize:15,
        color:'#2A2B2D',
        marginHorizontal:20,
    },
    active:{
        width:7,
        height:7,
        backgroundColor:"#40A789",
        borderRadius:50,
        marginHorizontal:5,
    },
    inActive:{
        width:4,
        height:4,
        backgroundColor:'#A5C2BD',
        borderRadius:50,
    },
    inputBlock:{
        backgroundColor:'#FFFFFF',
        padding:20,
        position:'relative',
        height:(height-210)
    },
    DropDownStyle:{
        backgroundColor:'white',
        borderBottomWidth:1.3,
        borderBottomColor:'#748189',
    },
    InputWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginVertical:10,
    }
})