import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeatMap from '../screens/HeatMap'
import MapScreen from '../screens/MapScreen'

export default function NewMapApp() {
  const Stack=createNativeStackNavigator()
  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          
          {/*<NewMapApp></NewMapApp>*/}
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  )
}