import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Express } from '../Pages/Express';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
export default ExpressNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
      <Tab.Navigator 
      tabBarOptions ={{
        pressColor:'white',
      }}
       screenOptions = {({route}) =>({
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarLabel:({tintColor, focused, item}) =>{
            return focused? (
                <View style = {{backgroundColor:'#ECF7F3',height:30,paddingHorizontal:10,width:80,borderRadius:27,justifyContent:'center',alignItems:'center'}}>
                    <Text style = {{color:'#40A789'}}>{route.name}</Text>
                </View>
            )
            : (
                <View style = {{height:30,paddingHorizontal:10,width:80,borderRadius:27,justifyContent:'center',alignItems:'center'}}>
                    <Text style = {{color:'#748189'}}>{route.name}</Text>
                </View>
            )
        }
      })}
      >
           <Tab.Screen name="LIVE" component={Express} />
           <Tab.Screen name="Линия" component={Express} screenOptions = {{
            }} />
      </Tab.Navigator>
  );
};