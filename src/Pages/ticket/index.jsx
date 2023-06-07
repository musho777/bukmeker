import {useRef,useCallback, useMemo} from 'react'
import { StyleSheet, View,Text } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { Download, Expres, Generation, Search2 } from "../../Assets/svg"
import { BootomModal } from "../../Components/BootomSheet"
import { HorizontalBlock2 } from "../../Components/HorizontalBlock2"
import { BootomSheetTicket } from './botomSheet'

export const Ticket = ({navigation}) =>{
    const bottomSheetRef = useRef(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
      }, []);
    const snapPoints = useMemo(() => ['30%'], []);
    return <View>
        <View style = {[Globalstyles.main]}>
            <View style = {styles.auth}>
                <Button onPress={()=>navigation.navigate('login')} width={"49%"} text = {'ВХОД'}/>
                <Button onPress={()=>navigation.navigate('registration')} width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
            </View>
            <Text style = {styles.text}>Ваш купон ставок пуст. Добавьте событие в купон или выберите одну из опций </Text>
            <View>
                <HorizontalBlock2 icone={<Search2 />} text1 = {'Поиск событий'} text2 = {'Индивидуально для Вас'} onPress = {()=>navigation.navigate('Search')} />
                <HorizontalBlock2 icone={<Expres />} text1 = {'Экспресс дня'} text2 = {'Лучшие предложения дня'}  onPress = {()=>navigation.navigate('Express')} />
                <HorizontalBlock2 icone={<Generation />} text1 = {'Генерация купона'} text2 = {'Сгенерируйте свой купон'} onPress = {()=>navigation.navigate('GenereateTicket')}/>
                <HorizontalBlock2 icone={<Download />} text1 = {'Загрузить купон'} text2 = {'Загрузите имеющийся купон'} onPress = {()=>handlePresentModalPress()}/>
            </View>
        </View>
        <BootomModal ref = {bottomSheetRef} snapPoints = {snapPoints}>
            <BootomSheetTicket />
        </BootomModal>
    </View>
}
const styles  = StyleSheet.create({
    auth:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    text:{
        color:'#748189',
        marginVertical:20,
        marginHorizontal:60,
        textAlign:'center'
    }
})
