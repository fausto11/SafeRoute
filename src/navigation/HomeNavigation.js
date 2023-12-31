import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FormDenuncia from '../screens/FormDenuncia';
import Icon  from "react-native-vector-icons/FontAwesome5";
import Route from '../screens/Route';
import Home from '../screens/Home';
import HeatMap from '../screens/HeatMap';
import NewMapRoute from '../screens/NewMapRoute';
import MapScreen from '../screens/MapScreen';
import SafeScreen from '../screens/SafeScreen';

const Tab= createBottomTabNavigator();
export default function HomeNavigation() {

  return (
    <Tab.Navigator>
        <Tab.Screen name='Map' component={NewMapRoute}  options={{
                headerShown:false,
              }}
        ></Tab.Screen>
         
        <Tab.Screen name='Denuncia' component={FormDenuncia} options={{
            tabBarIcon:({color,size})=>{
                <Icon name='user-lock' color={color} size={size}></Icon>
            },
            headerShown: false
        }}>
        </Tab.Screen>
        {/** <Tab.Screen name='Ruta' component={Route} options={{
            tabBarIcon:({color,size})=>{
                <Icon name='route' color={color} size={size}></Icon>
            },
            headerShown: false
        }}>    
    </Tab.Screen>*/ }
        
        
        <Tab.Screen name='Heat' component={HeatMap}  options={{
                headerShown:false,
              }}
        ></Tab.Screen>
        
        <Tab.Screen name='MapScreen' component={MapScreen}  options={{
                headerShown:false,
              }}
        ></Tab.Screen>
        <Tab.Screen  name='User' component={Home} options={{
            tabBarIcon:({color,size})=>{
                <Icon name='user-lock' color={color} size={size}></Icon>    
            },
            headerShown: false
            
        }}>
        </Tab.Screen>
        <Tab.Screen  name='Safe' component={SafeScreen} options={{
            tabBarIcon:({color,size})=>{
                <Icon name='user-lock' color={color} size={size}></Icon>    
            },
            headerShown: false
            
        }}>
        </Tab.Screen>
    </Tab.Navigator>
  )
}