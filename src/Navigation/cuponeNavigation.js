import {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { FavoriteHeader } from '../Components/Headers/favoriteHeader';
import { Favorites } from '../Pages/Favorites';
import { Main } from '../Pages/Main';
import { Tracked } from '../Pages/Tracked';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { Ticket } from '../Pages/ticket';
export default CuponeNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'Ticket'} options = {()=>{
      }}>
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options = {{
            header: ({navigation}) => (
                <FavoryteHEader2 title = {'Купон'} back = {false} navigation = {navigation}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};
