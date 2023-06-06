import {createStackNavigator} from '@react-navigation/stack';
import { FavoryteHEader2 } from '../Components/Headers/favoriteHeader2';
import { Ticket } from '../Pages/ticket';
import { SearchHeader } from '../Components/Headers/searchHeader';
import { Search } from '../Pages/Search';
import { GenereateTicket } from '../Pages/GenearateTicket';
import { GenereateTicketHeader } from '../Components/Headers/genereateTicket';
import { BootomModal } from '../Components/BootomSheet';
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
        <Stack.Screen
          name="Search"
          component={Search}
          options = {{
            header: ({navigation}) => (
                <SearchHeader onPress={()=>navigation.goBack()} navigation = {navigation}  />
              ),
          }}
        />
        <Stack.Screen
          name="GenereateTicket"
          component={GenereateTicket}
          options = {{
            header: ({navigation}) => (
                <GenereateTicketHeader onPress={()=>navigation.goBack()} navigation = {navigation}  />
              ),
          }}
        />
      </Stack.Navigator>
  );
};