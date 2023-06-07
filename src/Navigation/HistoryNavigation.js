import {createStackNavigator} from '@react-navigation/stack';
import { Tracked } from '../Pages/Tracked';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { HisotryNotAuth } from '../Pages/HisotryNotAuth';
export default HistoryNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'favorite'} options = {()=>{
      }}>
        <Stack.Screen
          name="HisotryNotAuth"
          component={HisotryNotAuth}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'Купон'} back = {false} navigation = {navigation}  />
                // <FavoriteHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
          }}
        />
        <Stack.Screen
          name="Tracked"
          component={Tracked}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'История ставок'} back = {false} navigation = {navigation}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};