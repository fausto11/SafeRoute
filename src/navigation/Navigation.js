
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';

const Stack =createNativeStackNavigator()
export default function Navigation() {
  return ( 
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='Home' component={HomeScreen} ></Stack.Screen>
      </Stack.Navigator>
         
  )
}