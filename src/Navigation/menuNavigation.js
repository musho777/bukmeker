import {createStackNavigator} from '@react-navigation/stack';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { MenuGuest } from '../Pages/Menu';
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
      </Stack.Navigator>
  );
};
// HistorySale