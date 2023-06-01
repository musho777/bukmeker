import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Cupone, Favorite, History, Menu, Popular } from '../Assets/svg';
import { MainHeader } from '../Components/Headers/MainHeader';
import { View } from 'react-native';
import { Main } from '../Pages/Main';

const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
        <Tab.Navigator 
        screenOptions = {({route})=> ({
            header: ({navigation}) => (
                <MainHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
            tabBarShowLabel: false,
            tabBarStyle: ( () => { 
                const routeName = getFocusedRouteNameFromRoute(route) ?? ''
                return routeName == 'QrNavigation' ? {display: 'none'} : {
                    height: 60,
                    backgroundColor:'#FFFFFF',
                    shadowColor: "#000000",
                    shadowOffset: {
                    width: 0,
                    height: 3,
                    },
                    shadowOpacity:  0.17,
                    shadowRadius: 3.05,
                    elevation: 4
                }
            })(route),
        })}
        >
            <Tab.Screen 
                name="Main"
                component={Main}
                options={()=>({  
                    tabBarIcon:({focused})=> <Popular focused={focused} />
                })}
            />
            <Tab.Screen 
                name="favorite"
                component={Main}
                options={()=>({  
                    tabBarIcon:({focused})=> <Favorite focused={focused} />
                })}
            />
             <Tab.Screen 
                name="cupone"
                component={Main}
                options={()=>({  
                    tabBarIcon:({focused})=> <View style = {{marginTop:-30}}>
                        <Cupone focused={focused} />
                    </View>
                })}
            />
            <Tab.Screen 
                name="history"
                component={Main}
                options={()=>({  
                    tabBarIcon:({focused})=> <History focused={focused} />
                })}
            />
            <Tab.Screen 
                name="Menu"
                component={Main}
                options={()=>({  
                    tabBarIcon:({focused})=> <Menu focused={focused} />
                })}
            />
        </Tab.Navigator>

    )
}   