import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { selectDestination, setDestination,setOrigin } from '../../slices/navSlices';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const dispatch=useDispatch();
   
    const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Hola, Bienvenido</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='A donde vas?'
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null)=>{
                        dispatch(
                            setDestination({
                            location:details.geometry.location,
                            description: data.description
                        })
                        );
                        navigation.navigate("RideOptionsRute");
                    }}  
                    query={{
                        key:GOOGLE_MAPS_KEY,
                        language:"en"
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                ></GooglePlacesAutocomplete>
            </View>
        </View>
        <View style={tw`flex-row bg-white justify-evenly mt-auto border-t border-gray-50` }>
            <TouchableOpacity
                onPress={()=> navigation.navigate("RideOptionsRute")}
                style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full  justify-between`}
            >
                <Icon name='map-pin' type='font-awesome' color="white" size={16} ></Icon>
                <Text style={tw`text-white text-center`}>Routes</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:20
    }
})