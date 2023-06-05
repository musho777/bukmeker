import {createStackNavigator} from '@react-navigation/stack';
import { AlltypesHeader } from '../Components/Headers/allTypesHeader';
import { MainHeader } from '../Components/Headers/MainHeader';
import { All } from '../Pages/AllPage';
import { Main } from '../Pages/Main';
import { Sport } from '../Pages/Sport';
export default PopularNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName={'Main'} options = {()=>{
      }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options = {{
            title:'',
            header: ({navigation}) => (
                <MainHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
          }}
        />
           <Stack.Screen 
                name="All"
                component={All}
                options={()=>({  
                    title:'',
                    header:({navigation})=>{
                      return <AlltypesHeader navigation = {navigation} />
                    }
                })}
            />
            <Stack.Screen 
                name="Sport"
                component={Sport}
                options={()=>({  
                    title:'',
                    header:({navigation})=>{
                      return <AlltypesHeader navigation = {navigation} />
                    }
                })}
            />
      </Stack.Navigator>
  );
};