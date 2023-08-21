import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import * as Location from 'expo-location'

import React, { useEffect, useRef, useState } from 'react'
import MapView ,{ Marker, Polyline, DirectionsService}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import stylesMaps from '../styles/stylesMap'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function MapComponent() {
 const originRef=useRef()
 const destinationRef=useRef()

  
  const [origin,setOrigin]= useState({
    latitude:-0.268026,
    longitude: -78.531686
  })

  const [destination,setDestination]=useState({
    latitude:-0.278426,
    longitude: -78.531687
  })

  useEffect(()=>{
    getLocatioPermission
  },[])

  async function getLocatioPermission(){
    let {status}= await Location.requestForegroundPermissionsAsync()
    if (status !== 'garanted'){
      alert('Permission denied')
      return;
    }

    let location=await Location.getCurrentPositionAsync({});
    const current ={
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(current)
  }
  


  return (
    <View >
      <MapView style={stylesMaps.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude:origin.longitude,
          latitudeDelta:0.09,
          longitudeDelta:0.04
        }}>
        <Marker
            draggable
            coordinate={origin}
            pinColor='green'
            onDragEnd={(direction)=>setOrigin(direction.nativeEvent.coordinate)}
          > 
        </Marker>
        <Marker
            draggable
            coordinate={destination}
            onDragEnd={(direction)=>setOrigin(direction.nativeEvent.coordinate)}
          > 
        </Marker>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor='purple'
          strokeWidth={4}
        ></MapViewDirections>
        
      </MapView>
      <View style={stylesMaps.card}>
        <GooglePlacesAutocomplete
              placeholder='Introducir ubicacion'
              //onPress={handleOriginInputChange}
              ref={originRef}
              fetchDetails={true}
              query={{
                key:PLACES_MAPS_API,
                language:'en'
              }}
              styles={stylesMaps.boxText}
            

            ></GooglePlacesAutocomplete>
      </View>

      <View style={stylesMaps.card} >
          <GooglePlacesAutocomplete
            placeholder='A donde vas?'
            //onPress={handleDestinationInputChange}
            ref={destinationRef}
            fetchDetails={true}
            query={{
              key:PLACES_MAPS_API,
              language:'en'
            }}
            styles={stylesMaps.boxText}
          ></GooglePlacesAutocomplete>
        
      </View>
      <View style={stylesMaps.button}>
          <TouchableOpacity style={stylesMaps.boxButton} >
              <Text style={stylesMaps.TextButton}>Buscar</Text>
          </TouchableOpacity>
      </View>
    </View>
      
      
    
    
  )
}

