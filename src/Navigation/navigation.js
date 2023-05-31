import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginHeader} from '../Components/Headers/loginHeader';
import {Login} from '../Pages/login';
import {Registration} from '../Pages/registration';
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
            header: ({navigation}) => (
              <LoginHeader text={'Авторизация'} onPress={() => { navigation.goBack();}}/>
            )}}
        />
        <Stack.Screen
          name="registration"
          component={Registration}
          options={{
            header: ({navigation}) => (
              <LoginHeader text={'Регистрация'} onPress={() => navigation.goBack()}/>)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
