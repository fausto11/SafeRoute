import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsRute from '../components/RideOptionsRute';

const MapScreen = () => {
    const Stack= createNativeStackNavigator()
  return (
    <View>
        <View style={tw`h-1/2`}>
            <Map></Map>
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen
                    name='NavigateCard'
                    component={NavigateCard}
                    options={{
                        headerShown:false
                    }}
                ></Stack.Screen>
                <Stack.Screen
                    name='RideOptionsRute'
                    component={RideOptionsRute}
                    options={{
                        headerShown:false
                    }}
                ></Stack.Screen>
            </Stack.Navigator>    
        </View>  
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})