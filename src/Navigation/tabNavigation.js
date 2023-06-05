import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Cupone, Favorite, History, Menu, Popular } from '../Assets/svg';
import { MainHeader } from '../Components/Headers/MainHeader';
import { View } from 'react-native';
import { Main } from '../Pages/Main';
import { createStackNavigator } from '@react-navigation/stack';
import PopularNavigation from './popularNavigation';
import { Favorites } from '../Pages/Favorites';
import { FavoriteHeader } from '../Components/Headers/favoriteHeader';
import favoriteNavigation from './favoriteNavigation';

const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
        <Tab.Navigator 
        screenOptions = {({route})=> ({
           headerShown:false,
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
                name="MainPage"
                component={PopularNavigation}
                options={()=>({  
                    tabBarIcon:({focused})=> <Popular focused={focused} />
                })}
            />
            <Tab.Screen 
                name="favoritePage"
                component={favoriteNavigation}
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
            {/* <Tab.Screen 
                name="Football"
                component={Football}
                options={()=>({  
                    tabBarIcon:({focused})=> <Menu focused={focused} />
                })}
            /> */}
        </Tab.Navigator>

    )
}   
// Football