import { StyleSheet, View,Text } from "react-native"
import { Globalstyles } from "../../../globalStyle"
import { Button } from "../../../ui/Button"
import { Download, Expres, Generation, Search2 } from "../../Assets/svg"
import { HorizontalBlock } from "../../Components/horizontalBlock"
import { HorizontalBlock2 } from "../../Components/HorizontalBlock2"

export const Ticket = ({navigation}) =>{
    return <View style = {Globalstyles.main}>
        <View style = {styles.auth}>
            <Button onPress={()=>navigation.navigate('login')} width={"49%"} text = {'ВХОД'}/>
            <Button onPress={()=>navigation.navigate('registration')} width={"49%"} text = {'РЕГИСТРАЦИЯ'}/>
        </View>
        <Text style = {styles.text}>Ваш купон ставок пуст. Добавьте событие в купон или выберите одну из опций </Text>
        <View>
            <HorizontalBlock2 icone={<Search2 />} text1 = {'Поиск событий'} text2 = {'Индивидуально для Вас'} onPress = {()=>navigation.navigate('Search')} />
            <HorizontalBlock2 icone={<Expres />} text1 = {'Экспресс дня'} text2 = {'Лучшие предложения дня'} />
            <HorizontalBlock2 icone={<Generation />} text1 = {'Генерация купона'} text2 = {'Сгенерируйте свой купон'} />
            <HorizontalBlock2 icone={<Download />} text1 = {'Генерация купона'} text2 = {'Сгенерируйте свой купон'} />
        </View>
    </View>
}
const styles  = StyleSheet.create({
    ticket:{

    },
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
// Download
// Expres
// Generation