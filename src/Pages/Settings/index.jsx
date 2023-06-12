import { useState,useMemo,useCallback,useRef } from "react"
import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { CleanCacheIcon, Cloud, Dolar, Exist, Fire, InfoBG, Locker, Message, Officail, PinCode,  Push,  Share,  ShareQR,  TouchBg, Type, VersionIcon, WalletMinuss, WalletPluss } from "../../Assets/svg"
import { BootomModal } from "../../Components/BootomSheet"
import { PopUp } from "../../Components/PopUp"
import { BootomSheet } from "./BootomSheet"
import { Items } from "./items"

export const Settings = ({navigation}) =>{
    const [exit,setExit] = useState(false)
    const [Worning,setWorning] = useState(false)
    const [info,setInfo] = useState(false)
    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(() => ['40%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
      }, []);
      const handelModalDismis = () =>{
        console.log(99)
        bottomSheetRef.current?.dismiss();

      }
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
                {icon:<Officail />,text:'Официальный сайт',onPress:()=>{setWorning(true)}},
                {icon:<Cloud />,text:'Настройки прокси'},
            ]}
        />
        <Items 
            name={'О приложении'} 
            data = {[
                {icon:<Share />,text:'Поделиться приложением',onPress:()=>{handlePresentModalPress()}},
                {icon:<ShareQR />,text:'Поделиться приложением по QR',onPress:()=>navigation.navigate('Qr')},
                {icon:<InfoBG />,text:'Подробная информация о приложении',onPress:()=>{setInfo(true)}},
                {icon:<VersionIcon />,text:'Версия приложения', text2: 'Mostsport v8(6247)',text3:'Обновлено'},
                {icon:<CleanCacheIcon />,text:'Очистить кэш',text3:'2.2 МБ',color:'#40A789'},
            ]}
        />
        <Items 
            data = {[
                {icon:<Exist />,text:'Поделиться приложением',color:'#E3413E',onPress:() =>{setExit(true)}},
            ]}
        />
        {exit && 
            <PopUp onPress2 = {()=>setExit(false)}  button1={'Да'} button2 = {'Нет'} open={exit}>
                <View style = {styles.popUpWrapper}>
                    <Text style = {styles.title}>Выйти</Text>
                    <Text style = {styles.text}>При выходе из учетной записи из устройства будут удалены все связанные с ней данные. Продолжить?</Text>
                </View>
            </PopUp>
        }
        {Worning && 
            <PopUp onPress2 = {()=>setWorning(false)} button1={'Открыть'} button2 = {'Отмена'} open={Worning}>
                <View style = {styles.popUpWrapper}>
                    <Text style = {styles.title}>Внимание</Text>
                    <Text style = {styles.text}>Вы действительно хотите перейти на официальный сайт?</Text>
                </View>
            </PopUp>
        }
        {info && 
            <PopUp onPress2 = {()=>setInfo(false)} button1={'Копировать'} button2 = {'Отмена'} open={info}>
                <View style = {styles.popUpWrapper}>
                    <Text style = {styles.title}>Подробная информация о приложении</Text>
                    <View style = {{marginBottom:10,marginTop:25}}>
                        <Text style = {[styles.text,{paddingVertical:0,fontWeight:800}]}>Версия клиента:</Text>
                        <Text style = {styles.text}>-Mostsport v.8(6247);</Text>
                    </View>
                    <View style = {{marginBottom:10}}>
                        <Text style = {[styles.text,{paddingVertical:0,fontWeight:800}]}>Устройтсво:</Text>
                        <Text style = {styles.text}>-Xiaomi M2101K7AG;</Text>
                    </View>
                    <View style = {{marginBottom:10}}>
                        <Text style = {[styles.text,{paddingVertical:0,fontWeight:800}]}>Версия OC:</Text>
                        <Text style = {styles.text}>-Android 12 S (31);</Text>
                    </View>
                    <View style = {{marginBottom:10}}>
                        <Text style = {[styles.text,{paddingVertical:0,fontWeight:800}]}>Даные о ГЕО:</Text>
                        <Text style = {styles.text}>-Армения;</Text>
                    </View>
                    <View >
                        <Text style = {[styles.text,{paddingVertical:0,fontWeight:800}]}>Дата установки:</Text>
                        <Text style = {styles.text}>-26.05.2023, 05:39 PM.</Text>
                    </View>
                </View>
            </PopUp>
        }
        <View style = {{margin:-24}}>
        <BootomSheet close = {()=>handelModalDismis()} ref = {bottomSheetRef} snapPoints = {snapPoints}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    title :{
        color:'#40A789',
        fontSize:18,
        fontFamily:'Inter-Medium',
        textAlign:'center',
    },
    popUpWrapper:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#2A2B2D',
        fontSize:14,
        fontFamily:'Inter-Regular',
        textAlign:'center',
        paddingHorizontal:35,
        paddingVertical:5,
    }
})