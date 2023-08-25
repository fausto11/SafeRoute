import { View, Text,StyleSheet,SafeAreaView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { saveReport } from '../api/api'


import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsRute from '../components/RideOptionsRute';


const FormDenuncia = () => {
  const Stack= createNativeStackNavigator()

 const [reports,setReports]=useState({
  parroquia:'',
  distrito:'',
  circuito:'',
  categoria:'',
  latitud:'',
  longitud:''
 });

const habdleChange=(name,value) => setReports({
  ...reports,[name]:value
});

const handleSubmit=()=>{
  saveReport(reports)
}

  return (
    <SafeAreaView >
      <Layout>
        <View>
          <Text
            style={stylesFD.inputTitle}
          >PARROQUIA</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='Ingresa la parroquia'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('parroquia',value)}
          ></TextInput>
        </View>
        <View>
          <Text
            style={stylesFD.inputTitle}
          >DISTRITO</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='Ingresa el Distrito'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('distrito',value)}
          ></TextInput>
        </View>
        <View>
          <Text
            style={stylesFD.inputTitle}
          >CIRCUITO</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='Ingresa el circuito'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('circuito',value)}
          ></TextInput>
        </View>
        <View>
          <Text
            style={stylesFD.inputTitle}
          >DELITO</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='Ingresa el Delito'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('categoria',value)}
          ></TextInput>
        </View>
        <View>
          <Text
            style={stylesFD.inputTitle}
          >LATITUD</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='latitud'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('latitud',value)}
          ></TextInput>
        </View>
        
        <View>
          <Text
            style={stylesFD.inputTitle}
          >LONGITUD</Text>
          <TextInput
            style={stylesFD.input}
            placeholder='longitud'
            placeholderTextColor="#546574"
            onChangeText={(value)=>habdleChange('longitud',value)}
          ></TextInput>
        </View>
        <TouchableOpacity style={stylesFD.buttonSave} onPress={handleSubmit}>
          <Text style={stylesFD.buttonText}>Enviar Denuncia</Text>
        </TouchableOpacity>
      </Layout>

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
                
            </Stack.Navigator>    
        </View>  
    </View>

    </SafeAreaView>
  )
}

const stylesFD=StyleSheet.create({
  input:{
    width:300,
    backgroundColor:"white",
    marginBottom:7,
    borderWidth:1,
    borderColor:"green",
    height:35,
    padding:4,
    textAlign:"center",
    borderRadius:8
    
  },
  inputTitle:{
    color:"white",
    marginBottom:3
  },
  buttonSave:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:8,
    marginBottom:10,
    backgroundColor:"#10ac84",
    width:300,
    alignItems:"center",
    justifyContent:"center",
   
  },
  buttonText:{
    color:"#ffffff",
    textAlign:"center"
  }
})

export default FormDenuncia