import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Cupone, Favorite, History, Menu, Popular } from '../Assets/svg';
import { View } from 'react-native';
import { Main } from '../Pages/Main';
import PopularNavigation from './popularNavigation';
import favoriteNavigation from './favoriteNavigation';
import cuponeNavigation from './cuponeNavigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import HistoryNavigation from './HistoryNavigation';
import MenuNavigation from './menuNavigation';


const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
    <BottomSheetModalProvider>
        <Tab.Navigator 
        screenOptions = {({route})=> ({
            headerShown:false,
            tabBarShowLabel: false,
            tabBarStyle: ( () => { 
                const routeName = getFocusedRouteNameFromRoute(route) ?? ''
                return routeName == 'HistorySale' ||routeName === 'Settings' ||routeName === 'NewsletterManagement' ||routeName === 'TypeOfCoefficients' || routeName === 'ScreenPopular' ||routeName === 'Push' ? {display: 'none'} : {
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
                component={cuponeNavigation}
                options={()=>({  
                    tabBarIcon:({focused})=> <View style = {{marginTop:-30}}>
                        <Cupone focused={focused} />
                    </View>
                })}
            />
            <Tab.Screen 
                name="history"
                component={HistoryNavigation}
                options={()=>({  
                    tabBarIcon:({focused})=> <History focused={focused} />
                })}
            />
            <Tab.Screen 
                name="MenuNavigation"
                component={MenuNavigation}
                options={()=>({ 
                    tabBarIcon:({focused})=> <Menu focused={focused} />
                })}
            />
        </Tab.Navigator>
        </BottomSheetModalProvider>
        
    )
}   
// Football