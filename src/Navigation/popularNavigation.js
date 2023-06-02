import {createStackNavigator} from '@react-navigation/stack';
import { MainHeader } from '../Components/Headers/MainHeader';
import { Main } from '../Pages/Main';
export default PopularNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'Main'}>
        <Stack.Screen
          name="Main"
          component={Main}
          options = {{
            header: ({navigation}) => (
                <MainHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};