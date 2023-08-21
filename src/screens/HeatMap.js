import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import HeatMapComponent from '../components/HeatMapComponent';

export default function HeatMap() {
  return (
    <HeatMapComponent></HeatMapComponent>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  