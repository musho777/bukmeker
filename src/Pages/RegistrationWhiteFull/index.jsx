import { StyleSheet, View ,Text, Dimensions, ScrollView,TouchableOpacity} from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Checkded, DropDownIcon, Info, NotChecked, RegBlock } from "../../Assets/svg"
import SelectDropdown from "react-native-select-dropdown"
import { Input } from "../../../ui/Input";
import { Number } from "../../Components/Number";
import { ButtonWhiteIcon } from "../../../ui/Button/ButtonWhiteIcon";
import { useState } from "react";
const { width,height } = Dimensions.get('window');

export const RegistrationWhiteFull = () =>{
    const [checked,setChecked] = useState(false) 
    return <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {Globalstyles.block}>
            <View style = {{height:100,marginLeft:30,flexDirection:'row',alignItems:'center'}}>
                <RegBlock />
                <Text style = {styles.text}>Полная</Text>
            </View>
            <View style ={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:20}}>
                <View style = {styles.inActive} />
                <View style = {styles.active} />
            </View>
        </View>
        <View  style = {styles.inputBlock}>
            <Text style = {{color:'#40A789',fontFamily:'Inter-Medium',fontSize:18}}>Персональные данные</Text>
            <View style = {styles.InputWrapper}>
                <Number number={1}/>
                <Input width={width-90} placeholder={'Фамилия*'}/>
            </View>
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={2}/>
                <Input width={width-90} placeholder={'Имя*'}/>
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={3}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Страна*'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',}]}
                    buttonTextStyle = {{color:'#748189',textAlign:"left",left:15,fontSize:18}}
                />
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={4}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Область(если есть)'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',borderBottomColor:'#C1C6C9'}]}
                    buttonTextStyle = {{color:'#C1C6C9',textAlign:"left",left:15,fontSize:18}}
                    disabled
                />
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={5}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Город(если есть)'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',borderBottomColor:'#C1C6C9'}]}
                    buttonTextStyle = {{color:'#C1C6C9',textAlign:"left",left:15,fontSize:18}}
                    disabled
                />
            </View>
            <View style = {styles.InputWrapper}>
                <Number number={6}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Дата рождения*'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',}]}
                    buttonTextStyle = {{color:'#748189',textAlign:"left",left:15,fontSize:18}}
                />
            </View>
            <Text style = {{color:'#40A789',fontFamily:'Inter-Medium',fontSize:18,marginVertical:20}}>Персональные данные</Text>
            <View style = {styles.InputWrapper}>
                <Number number={7}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Валюта*'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',}]}
                    buttonTextStyle = {{color:'#748189',textAlign:"left",left:15,fontSize:18}}
                />
            </View>
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={8}/>
                <Input width={width-90} placeholder={'E-mail адрес*'}/>
            </View>
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={9}/>
                <View>
                    <Text style = {{color:'#748189'}}>Код*</Text>
                    <Input width= {70} />
                </View>
                <Input type="numeric" placeholder={'Номер телефона*'} width={width-180}/>
            </View>
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={10}/>
                <Input width={width-90} secure placeholder={'Введите пароль*'}/>
            </View>
                <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <View></View>
                <SelectDropdown 
                    renderDropdownIcon = {()=> <View style={{marginRight: 15}}>
                    <DropDownIcon />
                    </View>
                    }
                    defaultButtonText = {'Требования к паролю'}
                    buttonStyle = {[{width:"95%",borderRadius:6}]}
                    buttonTextStyle = {{color:'#2A2B2D',textAlign:"left",left:0,fontSize:13}}
                />
                </View>
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={11}/>
                <Input width={width-90} secure placeholder={'Введите пароль*'}/>
            </View>
            
            <View style = {[styles.InputWrapper,{marginTop:30}]}>
                <Number number={12}/>
                <SelectDropdown 
                    renderDropdownIcon = {()=><DropDownIcon />}
                    defaultButtonText = {'Выбор бонуса'}
                    buttonStyle = {[styles.DropDownStyle,{width:'85%',borderBottomColor:'#C1C6C9'}]}
                    buttonTextStyle = {{color:'#C1C6C9',textAlign:"left",left:15,fontSize:18}}
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
            <View style = {{flexDirection:'row',marginBottom:100}}>
                <Info />
                <Text style = {{marginHorizontal:30,color:'#40A789',fontSize:14,fontFamily:'Inter-Regular'}}>Правила компании</Text>
            </View>
            <View style = {{position:'absolute',right:20,bottom:20}}>
                <ButtonWhiteIcon />
            </View>
        </View>
    </ScrollView>
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
