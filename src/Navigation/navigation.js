import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginHeader} from '../Components/Headers/loginHeader';
import { RegistrationWhite } from '../Components/RegistrationWhite';
import {Login} from '../Pages/login';
import {Registration} from '../Pages/registration';

import NavigationMenu from './tabNavigation';
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
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator initialRouteName={'main'}>
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
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};