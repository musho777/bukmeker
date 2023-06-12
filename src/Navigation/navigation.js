import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginHeader} from '../Components/Headers/loginHeader';
import { RegistrationWhite } from '../Components/RegistrationWhite';
import {Login} from '../Pages/login';
import { NewsletterManagement } from '../Pages/NewsletterManagement';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { Push } from '../Pages/Push';
import { Qr } from '../Pages/Qr';
import {Registration} from '../Pages/registration';
import { ScreenPopular } from '../Pages/ScreenPopular';
import { Settings } from '../Pages/Settings';
import { TypeOfCoefficients } from '../Pages/TypeOfCoefficients';

import NavigationMenu from './tabNavigation';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
export default Navigation = () => {
  const Stack = createStackNavigator();
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#F5F6FA',
      background: '#F5F6FA',
      border: '#F5F6FA',
    },
  };
  return (
    <BottomSheetModalProvider>
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator initialRouteName={'main'} >
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <LoginHeader text={'Авторизация'} onPress={() => { navigation.goBack();}}/>
            )}}
        />
        <Stack.Screen
          name="registration"
          component={Registration}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <LoginHeader text={'Регистрация'} onPress={() => navigation.goBack()}/>)
          }}
        />
        <Stack.Screen
          name="RegistrationWhite"
          component={RegistrationWhite}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <LoginHeader text={'Регистрация'} onPress={() => navigation.navigate('registration')}/>)
          }}
        />
         <Stack.Screen
          name="main"
          component={NavigationMenu}
          options={{
            headerShown:false,
            // headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Settings1"
          component={Settings}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 onPress={()=>navigation.goBack()} title = {'Настройки'} back = {true} user navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="Push"
          component={Push}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 onPress={()=>navigation.goBack()} title = {'Push-уведомления'} back = {true}  navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="TypeOfCoefficients"
          component={TypeOfCoefficients}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 onPress={()=>navigation.goBack()} title = {'Тип коэффицентов'} back = {true}  navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="NewsletterManagement"
          component={NewsletterManagement}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 onPress={()=>navigation.goBack()} title = {'Управление рассылками'} back = {true}  navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="ScreenPopular"
          component={ScreenPopular}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 refresh onPress={()=>navigation.goBack()} title = {'Экран популярное'} back = {true}  navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="Qr"
          component={Qr}
          options = {{
            header: ({navigation}) => (
                <LoginHeader onPress={()=>navigation.goBack()} text ={'Поделиться приложением'} />
              ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BottomSheetModalProvider>
  );
};