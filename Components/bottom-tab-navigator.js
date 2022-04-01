import React,{Component} from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../ScreenFolder/search';
import TransactionScreen from '../ScreenFolder/transaction';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

export default class BottonTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <tab.Navigator 
                screenOptions={({route}) => ({tabBarIcon: ({focused, color, size}) => {
                    var iconName;
                    if (route.name === 'Transaction'){
                        iconName = 'book';
                    }else if (route.name === 'Search'){
                        iconName = 'search';
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color}/>
                    )
                }
            }
            )}
            tabBarOptions={{
                activeTintColor: "#FFFFFF",
                inactiveTintColor: "black",
                style: {
                  height: 130,
                  borderTopWidth: 0,
                  backgroundColor: "#5653d4"
                },
                labelStyle: {
                  fontSize: 20,
                  fontFamily: "Rajdhani_600SemiBold"
                },
                labelPosition: "beside-icon",
                tabStyle: {
                  marginTop: 25,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 30,
                  borderWidth: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5653d4"
                }
              }}
                >
                <tab.Screen name='Transaction' component={TransactionScreen}/>
                <tab.Screen name='Search' component={SearchScreen}/>
                </tab.Navigator>
            </NavigationContainer>
        )
    }
}