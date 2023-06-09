import {createStackNavigator} from '@react-navigation/stack';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { MenuGuest } from '../Pages/Menu';
import { NewsletterManagement } from '../Pages/NewsletterManagement';
import { Push } from '../Pages/Push';
import { Qr } from '../Pages/Qr';
import { ScreenPopular } from '../Pages/ScreenPopular';
import { Settings } from '../Pages/Settings';
import { TypeOfCoefficients } from '../Pages/TypeOfCoefficients';
import {LoginHeader} from '../Components/Headers/loginHeader.jsx'
export default MenuNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'Settings1'} options = {()=>{
      }}>
        <Stack.Screen
          name="Menu"
          component={MenuGuest}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'Меню'} back = {false} settings navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="Settings1"
          component={Settings}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 onPress={()=>navigation.goBack()} title = {'Настройки'} back = {true} settings navigation = {navigation}  />
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
  );
};