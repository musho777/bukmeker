import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { CleanCacheIcon, Cloud, Dolar, Exist, Fire, InfoBG, Locker, Message, Officail, PinCode,  Push,  Share,  ShareQR,  TouchBg, Type, VersionIcon, WalletMinuss, WalletPluss } from "../../Assets/svg"
import { Items } from "./items"

export const Settings = ({navigation}) =>{
    return <ScrollView>
        <Items 
            name={'Управление счётом'} 
            data = {[
                {icon:<WalletPluss />,text:'Пополнить счет'},
                {icon:<WalletMinuss />,text:'Вывести со счета'}
            ]}
        />
        <Items 
            name={'Безопасность'} 
            data = {[
                {icon:<PinCode />,text:'Пин код и биометрия'},
                {icon:<Locker />,text:'Настройки безопасности',disabled:true}
            ]}
        />
        <Items 
            name={'Настройки ставок'} 
            data = {[
                {icon:<Dolar />,text:'Провод ставки',disabled:true},
                {icon:<TouchBg />,text:'Ставка в один клик',disabled:true}
            ]}
        />
        <Items 
            name={'Настройки приложения'} 
            data = {[
                {icon:<Type />,text:'Тип коэффициента',text2:'Десятичный',onPress :()=>{navigation.navigate('TypeOfCoefficients')}},
                {icon:<Push />,text:'Push-уведомления',onPress :()=>{navigation.navigate('Push')}},
                {icon:<Message />,text:'Управление рассылками',disabled:false,onPress :()=>{navigation.navigate('NewsletterManagement')} },
                {icon:<Fire />,text:'Экран популярное',onPress :()=>{navigation.navigate('ScreenPopular')}}

            ]}
        />
        <Items 
            name={'Дополнительно'} 
            data = {[
                {icon:<Officail />,text:'Официальный сайт',},
                {icon:<Cloud />,text:'Настройки прокси'},
            ]}
        />
        <Items 
            name={'О приложении'} 
            data = {[
                {icon:<Share />,text:'Поделиться приложением',},
                {icon:<ShareQR />,text:'Поделиться приложением по QR'},
                {icon:<InfoBG />,text:'Подробная информация о приложении'},
                {icon:<VersionIcon />,text:'Версия приложения', text2: 'Mostsport v8(6247)',text3:'Обновлено'},
                {icon:<CleanCacheIcon />,text:'Очистить кэш',text3:'2.2 МБ',color:'#40A789'},
            ]}
        />
        <Items 
            data = {[
                {icon:<Exist />,text:'Поделиться приложением',color:'#E3413E'},
            ]}
        />
    </ScrollView>
}
