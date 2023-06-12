import { useState } from "react";
import { StyleSheet, Text, View,Switch } from "react-native"
import { Line } from "../../Assets/svg";

export const ScreenPopular = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <View>
        <View style = {styles.block}>
            <Text style = {[styles.title,{color:'#40A789'}]}>Отображение блоков</Text>
            <View style = {styles.item}>
                <Text style = {styles.title}>Лента спортов</Text>
                <Switch
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Баннерная лента</Text>
                <Switch
                    trackColor={{false: '#D6D6D6', true: '#C3E7DD'}}
                    thumbColor={isEnabled1 ? '#40A789' : '#748189'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>
        </View>
        <View style = {styles.block}>
            <Text style = {[styles.title,{color:'#40A789'}]}>Порядок разделов</Text>
            <View style = {styles.item}>
                <Text style = {styles.title}>LIVE</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Линия</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Esports</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Games</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Слоты</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Лайв казино</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Чемп. LIVE</Text>
                <Line />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.title}>Чемп. Линия</Text>
                <Line />
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        paddingHorizontal:15,
        marginTop:15,
        paddingVertical:20,
    },
    title:{
        fontSize:15,
        fontFamily:"Inter-SemiBold",
        color:'#2A2B2D',
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        alignItems:'center',
    }
})