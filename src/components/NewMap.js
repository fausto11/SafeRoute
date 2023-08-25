import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import NavOptions from './NavOptions';
import MapView ,{ Marker, Polyline, DirectionsService}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import stylesMaps from '../styles/stylesMap'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../../slices/navSlices';



const NewMap = () => {
  const dispatch= useDispatch()
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      
      <GooglePlacesAutocomplete
        placeholder='A donde vas ?'
        styles={{
          container:{
            flex:0
          },
          textInput:{
            fontSize:18
          }
        }}
        query={{
          key:GOOGLE_MAPS_KEY,
          language:'en'
        }}
        onPress={(data,details=null)=>{
            dispatch(
              setOrigin({
              location: details.geometry.location,
              description: data.description
            })
            );
            dispatch(setDestination(null))
        }}
        fetchDetails={true}
        minLength={2}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      ></GooglePlacesAutocomplete>
      <NavOptions></NavOptions>
    </SafeAreaView>
  )
}

export default NewMap

const styles = StyleSheet.create({})