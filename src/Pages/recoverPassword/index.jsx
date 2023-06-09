import {useState} from 'react'
import { StyleSheet, View,TouchableOpacity,Text,Dimensions } from "react-native"
import SelectDropdown from 'react-native-select-dropdown'
import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { DropDownIcon } from '../../Assets/svg'
const { width } = Dimensions.get('window');

export const RecoverPassword = ({navigation}) =>{
    const [active,setActiev] = useState(0)
    return <View style = {styles.block}>
        <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingVertical:10,borderBottomColor:"#F5F6FA",borderBottomWidth:1}}>
            <TouchableOpacity onPress={()=>setActiev(0)} style = {[styles.item,active ===0 && {backgroundColor:'#ECF7F3'}]}>
                <Text style = {[styles.text,active === 0 && {color:'#40A789'}]}>По телефону</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiev(1)} style = {[styles.item,active ===1 && {backgroundColor:'#ECF7F3'}]}>
                <Text style = {[styles.text,active === 1 && {color:'#40A789'}]}>По e-mail</Text>
            </TouchableOpacity>
        </View>
        {active === 0 && <View style = {{paddingHorizontal:20}}>
            <Text style = {styles.text2}>Для восстановления пароля введите номер мобильного телефона, указанный вами при регистрацции.</Text>
            <View style = {styles.InputWrapper}>
                <View>
                    <Text style = {{color:'#748189'}}>Код*</Text>
                    <SelectDropdown 
                        renderDropdownIcon = {()=><DropDownIcon />}
                        defaultButtonText = {' '}
                        buttonStyle = {[styles.DropDownStyle,{width:70}]}
                    />
                </View>
                <Input  type="numeric" placeholder={'Номер телефона*'} width={width-130}/>
                </View>
        </View>}

        {active === 1 && <View style = {{paddingHorizontal:20}}>
            <Text style = {styles.text2}>Для восстановления пароля введите номер мобильного телефона, указанный вами при регистрацции.</Text>
            <View style = {styles.InputWrapper}>
                <Input  type="numeric" placeholder={'E-mail адрес*'} width={'100%'}/>
            </View>
        </View>
        }
       <View style = {{position:'absolute',padding:20,paddingVertical:25,bottom:0,width:'100%'}}>
            <Button onPress={() =>navigation.navigate('ConfirmPassword')} text={'ДАЛЕЕ'} />
        </View>
    </View>
}
const styles = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%',
        height:'100%',
    },
    item:{
        backgroundColor:'#FFFFFF',
        borderRadius:27,
        paddingHorizontal:10,
        paddingVertical:10,
    },
    text:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:600,
        fontSize:12,
    },
    text2:{
        color:'#2A2B2D',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:15,
        marginVertical:15,
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