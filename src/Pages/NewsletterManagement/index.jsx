import {useState} from 'react'
import { StyleSheet, Switch, Text, View, } from "react-native"
import { MessageBg } from "../../Assets/svg"
import { HorizontalBlock2 } from "../../Components/HorizontalBlock2"

export const NewsletterManagement = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return <View>
        <View style = {styles.block}>
            <HorizontalBlock2 arrow icone={<MessageBg />}  text1={'Привяжите e-mail'} text2 ='Для информации о расчете ставок'/>
        </View>
        <View style = {{backgroundColor:'#FFFFFF',padding:10}}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Получать на e-mail новости о событиях</Text>
                <Switch
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    disabled
                />
            </View>
            <View style = {styles.item}> 
                <Text style = {styles.text}>Получать на e-mail новости о поступлениях депозита</Text>
                <Switch
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled1 ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    disabled

                />
            </View>
            <View style = {styles.item}>
                <Text style = {[styles.text,{color:'#2A2B2D'}]}>Получать смс с информацией о  промо-акциях</Text>
                <Switch
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled2 ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>
        </View>
        <Text style = {[styles.text,{width:'100%',padding:10,fontSize:13}]}>Рассылка будет осуществляться после активации почты и телефона</Text>
    </View>
}
const styles  = StyleSheet.create({
    block:{
        padding:10,
    },
    text:{
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:15,
        color:'#748189',
        width:'80%',
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    }
})