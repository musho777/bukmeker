import {createStackNavigator} from '@react-navigation/stack';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { MenuGuest } from '../Pages/Menu';
import { Push } from '../Pages/Push';
import { Settings } from '../Pages/Settings';
import { TypeOfCoefficients } from '../Pages/TypeOfCoefficients';
export default MenuNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'HistoryAuth'} options = {()=>{
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
          name="Settings"
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
      </Stack.Navigator>
  );
};