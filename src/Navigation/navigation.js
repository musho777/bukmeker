import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginHeader} from '../Components/Headers/loginHeader';
import { RegistrationWhite } from '../Components/RegistrationWhite';
import {Login} from '../Pages/login';
import {Registration} from '../Pages/registration';
import { RegistrationWhiteFull } from '../Pages/RegistrationWhiteFull';
import { RegistrationWhitePhone } from '../Pages/RegistrationWhitePhone';
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
    <NavigationContainer theme={MyTheme} initialRouteName={'login'}>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// RegistrationWhiteFull