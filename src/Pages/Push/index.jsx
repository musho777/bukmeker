import { useState } from "react";
import { StyleSheet, Text, View,Switch } from "react-native"

export const Push = () =>{
    const [isEnabled, setIsEnabled] = useState(true);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return <View style = {styles.block}>
        <View style = {{padding:20}}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Уведомления о событиях матчей</Text>
                <Switch 
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style = {styles.item}>
                <Text style = {[styles.text,{color:'#748189'}]}>Световой индикатор уведомлений</Text>
                <Switch 
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled1 ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    disabled
                />
            </View>
            <Text style = {styles.text}>Звуки</Text>
        </View>
    </View>
}

const styles  = StyleSheet.create({
    block:{
        marginVertical:10,
        backgroundColor:'#FFFFFF',
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginVertical:5,
        marginBottom:20,
    },
    text:{
        color:'#2A2B2D',
        fontWeight:500,
        fontSize:15,
        fontFamily:'Inter',
    }
})