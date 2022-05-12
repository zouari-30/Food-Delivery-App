import React from "react";
import { Image , View , TouchableOpacity , Text} from 'react-native'
import {createBottomTabNavigator , BottomTabBar} from '@react-navigation/bottom-tabs'
import home from '../screens/home'
import  {COLORS , icons} from '../constants/index'

const Tab = createBottomTabNavigator();

const tabs = () => {
    return (
        <Tab.Navigator 
            style ={
                borderTopWidth = 0,
                backgroundColor ='transparent'
            
            }
        >
            <Tab.Screen 
                name= "home"
                component={home}
                options = {{
                    tabBarIcon : ({focused}) => {
                        return(
                        <Image
                            source ={icons.cutlery}
                            resizeMode = "contain"
                            style = {{
                                width : 25 ,
                                height : 25 ,
                                tintColor : focused ? COLORS.primary : COLORS.secondary 
                            }
                            }
                        ></Image>
                        ); 
                    }
                }}
            />
             <Tab.Screen 
                name= "search"
                component={home}
                options = {{
                    tabBarIcon : ({focused}) => {
                        return(
                        <Image
                            source ={icons.search}
                            resizeMode = "contain"
                            style = {{
                                width : 25 ,
                                height : 25 ,
                                tintColor : focused ? COLORS.primary : COLORS.secondary 
                            }
                            }
                        ></Image>
                        ); 
                    }
                }}
            />
             <Tab.Screen 
                name= "like"
                component={home}
                options = {{
                    tabBarIcon : ({focused}) => {
                        return(
                        <Image
                            source ={icons.like}
                            resizeMode = "contain"
                            style = {{
                                width : 25 ,
                                height : 25 ,
                                tintColor : focused ? COLORS.primary : COLORS.secondary 
                            }
                            }
                        ></Image>
                        ); 
                    }
                }}
            />
             <Tab.Screen 
                name= "user"
                component={home}
                options = {{
                    tabBarIcon : ({focused}) => {
                        return(
                        <Image
                            source ={icons.user}
                            resizeMode = "contain"
                            style = {{
                                width : 25 ,
                                height : 25 ,
                                tintColor : focused ? COLORS.primary : COLORS.secondary 
                            }
                            }
                        ></Image>
                        ); 
                    }
                }}
            />
          
               
        </Tab.Navigator>
    )
}

export default tabs ;