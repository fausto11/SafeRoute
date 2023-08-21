import { SafeAreaView, Text,View } from 'react-native'
import React from 'react'
import MapComponent from '../components/MapComponent'

import stylesMap from '../styles/stylesMap'
import MapView from 'react-native-maps'
import stylesMaps from '../styles/stylesMap'

export default function Route() {
  return (
    <View >
      <MapComponent></MapComponent>
    </View>
  )
}