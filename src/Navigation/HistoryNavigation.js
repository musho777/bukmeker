import {createStackNavigator} from '@react-navigation/stack';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { HisotryNotAuth } from '../Pages/HisotryNotAuth';
import { HistoryAuth } from '../Pages/HistoryAuth';
import { HistoryAuthHeader } from '../Components/Headers/HistoryAuthHeader';
import { HistorySale } from '../Pages/HistorySale';
export default HistoryNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'HistoryAuth'} options = {()=>{
      }}>
        <Stack.Screen
          name="HisotryNotAuth"
          component={HisotryNotAuth}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'Купон'} back = {false} navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="HistoryAuth"
          component={HistoryAuth}
          options = {{
            header: ({navigation}) => (
                <HistoryAuthHeader title = {'История ставок'} back = {false} navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="HistorySale"
          component={HistorySale}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'История ставок'} navigation = {navigation}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};
// HistorySale