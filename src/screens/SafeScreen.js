import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';

import { getSavePath } from '../api/api';

const SafePathScreen = () => {
  const [safestPath, setSafestPath] = useState([]);
  const [mapRegion, setMapRegion] = useState(null);
  const [startAddress, setStartAddress] = useState({});
  const [endAddress, setEndAddress] = useState({});
  const [routeColor, setRouteColor] = useState('blue');

  const [saveRoute, setSaveRoute] = useState({
    start_address: '',
    end_address: ''
  });

  const handleChange = (name, value) => {
    setSaveRoute((prevRoute) => ({
      ...prevRoute,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting route:', saveRoute);
        
      const response = await getSavePath(saveRoute);
      console.log('Response from API:', response);
  
      if (response && response.safest_path) {
        const formattedCoordinates = response.safest_path.map(coord => ({
          latitude: coord[0],
          longitude: coord[1]
        }));
        setSafestPath(formattedCoordinates);
  
        const color = response.color || 'blue';
        setRouteColor(color);
        
        const allLatitudes = formattedCoordinates.map(coord => coord.latitude);
        const allLongitudes = formattedCoordinates.map(coord => coord.longitude);
        const minLat = Math.min(...allLatitudes);
        const maxLat = Math.max(...allLatitudes);
        const minLng = Math.min(...allLongitudes);
        const maxLng = Math.max(...allLongitudes);
  
        setMapRegion({
          latitude: (minLat + maxLat) / 2,
          longitude: (minLng + maxLng) / 2,
          latitudeDelta: maxLat - minLat + 0.02,
          longitudeDelta: maxLng - minLng + 0.02,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            width: 300,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        placeholder='Enter Starting Address'
        // ... (otros props)
        onPress={(data, details = null) => {
          handleChange('start_address', details.formatted_address);
          setStartAddress({
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
          });
        }}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_KEY,
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            width: 300,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        placeholder='Enter Ending Address'
        // ... (otros props)
        onPress={(data, details = null) => {
          handleChange('end_address', details.formatted_address);
          setEndAddress({
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
          });
        }}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_KEY,
          language: 'en',
        }}
      />
      <Button title="Get Safe Path" onPress={handleSubmit} />
      <MapView style={styles.map} region={mapRegion}>
        <Polyline coordinates={safestPath} strokeWidth={4} strokeColor={routeColor} />
        {safestPath.length > 0 && (
          <Marker coordinate={safestPath[0]} title='Start' />
        )}
        {mapRegion && (
          <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
            title='End'
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: '100%',
    height: 400,
  },
});

export default SafePathScreen;