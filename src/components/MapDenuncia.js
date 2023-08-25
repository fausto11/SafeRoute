import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useRef,useState} from 'react'
import MapView ,{ Marker, Polyline, DirectionsService}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectDestination, selectOrigin } from '../../slices/navSlices'
import stylesMaps from '../styles/stylesMap'
import MapScreen from '../screens/MapScreen'

const MapDenuncia = () => {
   
    return (
      <View >
        
      </View>
  )
}

export default MapDenuncia

const styles = StyleSheet.create({})