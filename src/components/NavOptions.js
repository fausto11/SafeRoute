import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../slices/navSlices';


const data=[
    {
        id:"123",
        title:"Get route",
        image:"https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/map-route-image-6807-68565d04f06014aba2f90b32d2c61f45@1x.jpg",
        screen:"MapScreen"

    },
    {
        id:"456",
        title:"Heat Map",
        image:"https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/map-route-image-6807-68565d04f06014aba2f90b32d2c61f45@1x.jpg",
        screen:"Heat"
    },
    {
        id:"356",
        title:"Denuncia",
        image:"https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/map-route-image-6807-68565d04f06014aba2f90b32d2c61f45@1x.jpg",
        screen:"Denuncia"
    }
]

const NavOptions = () => {
    const navigation=useNavigation();
    const origin=useSelector(selectOrigin)
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity
                onPress={()=>navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-2 bg-gray-50 m-2 w-40`}
                disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{width:120,height:120,resizeMode:'contain'}}
                        source={{uri:item.image}}
                    ></Image>
                    <Text style={tw`mt-1 text-lg font-semibold text-center`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    >  
    </FlatList>
  )
}

export default NavOptions

const styles = StyleSheet.create({})