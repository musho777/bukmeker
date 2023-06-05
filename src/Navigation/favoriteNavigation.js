import {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { FavoriteHeader } from '../Components/Headers/favoriteHeader';
import { Favorites } from '../Pages/Favorites';
import { Main } from '../Pages/Main';
import { Tracked } from '../Pages/Tracked';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
export default FavoriteNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'favorite'} options = {()=>{
      }}>
        <Stack.Screen
          name="favorite"
          component={Favorites}
          options = {{
            header: ({navigation}) => (
                <FavoriteHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
          }}
        />
        <Stack.Screen
          name="Tracked"
          component={Tracked}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};

// Tracked