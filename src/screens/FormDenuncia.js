import { SafeAreaView, Text, TextInput, View, Picker, SectionList, Button,TouchableOpacity, FlatList, ScrollView,StatusBar} from 'react-native'
import React, { useRef ,useEffect} from 'react'
import styles from '../styles/stylesLogin'
import { useState } from 'react';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import stylesDenuncia from '../styles/stylesDenuncia';
import MapComponent from '../components/MapComponent';
import MapComponentLocation from '../components/MapComponentLocation';

import MapView ,{ Marker, Polyline, DirectionsService}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import stylesMaps from '../styles/stylesMap'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//import SelectList from 'react-native-dropdown-select-list'


export default function FormDenuncia() {
  const [category, setCategory] = useState();
  const [subcategory,setSubCategory]=useState();
  const [circuito,setSubcircuito]=useState();
  const [robo, setRobo]=useState();
  const [hour, setHour]=useState();
  const [consumo, setConsumo]=useState();
  const [venta, setVenta]=useState();

  const originRef=useRef()

  const [origin,setOrigin]= useState({
    latitude:-0.268026,
    longitude: -78.531686
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
  

  const parroquias=[
    {key:'Al',value:'Alangasi'},
    {key:'Am',value:'Amaguaña'},
    {key:'Cl',value:'Calderon'},
  ]

  const distrito={
    'Al':[
      {key:'1',value:'Los Chillos'}
    ],
    'Am':[
      {key:'2',value:'Los Chillos'},
    ],
    'Cl':[
      {key:'3',value:'Calderon'}
    ]
  }

  const circuitos={
    'Al':[
      {key:'1',value:'Alangasi'}
    ],
    'Am':[
      {key:'2',value:'Amaguaña'},
      {key:'3',value:'El Ejido'},
      {key:'4',value:'Santa Isabel'},
    ],
    'Cl':[
      {key:'5',value:'Bellavista'},
      {key:'6',value:'Bicentenario'},
      {key:'7',value:'Calderon'},
      {key:'8',value:'Carapungo'},
    ]
  }

  const incidencia=[
    {key:'RO',value:'Robo'},
    {key:'RP',value:'Robo Personas'},
    {key:'TR',value:'Tentativa de Robo'},
    {key:'RC',value:'Robo a Carros'},
  ]
    
  const consumoDroga=[
    {key:'1',value:'SI'},
    {key:'2',value:'NO'},
  ]
  const ventaDroga=[
    {key:'1',value:'SI'},
    {key:'2',value:'NO'},
  ]

  const hourPMandAM=[
      {key:'1',value:'1'},
      {key:'2',value:'2'},
      {key:'3',value:'3'},
      {key:'4',value:'4'},
      {key:'5',value:'5'},
      {key:'6',value:'6'},
      {key:'7',value:'7'},
      {key:'8',value:'8'},
      {key:'9',value:'9'},
      {key:'10',value:'10'},
      {key:'11',value:'11'},
      {key:'12',value:'12'},
      {key:'13',value:'13'},
      {key:'14',value:'14'},
      {key:'15',value:'15'},
      {key:'16',value:'16'},
      {key:'17',value:'17'},
      {key:'18',value:'18'},
      {key:'19',value:'19'},
      {key:'20',value:'20'},
      {key:'21',value:'21'},
      {key:'22',value:'22'},
      {key:'23',value:'23'},
      {key:'24',value:'24'},
  ]
    
      
  
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={stylesDenuncia.scrollView}>
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
            <Text>Llena el Formulario</Text>
            <View  >
              <View>
                <Text>Parroquia</Text>
                  <SelectList  
                    setSelected={setCategory}
                    data={parroquias}
                    placeholder={"Selecciona Parroquia"}
                    defaultOption={{key:'Al',value:'Alangasi'}}
                  >
                  </SelectList>
                
                  <Text>Distrito</Text>
                  <SelectList
                    setSelected={setSubCategory}
                    data={distrito[category] || []}
                    placeholder={'Seleccione Distrito'}
                    defaultOption={distrito[category] && distrito[category][0]}
                  ></SelectList>
                  <Text>Circuito</Text>
                  <SelectList
                    setSelected={setSubcircuito}
                    data={circuitos[category] || []}
                    placeholder={'Seleccione el Circuito'}
                    defaultOption={circuitos[category] && circuitos[category][0]}
                  ></SelectList>
              </View>
              <View>
                <Text>Delito</Text>
                <SelectList  
                    setSelected={setRobo}
                    data={incidencia}
                    placeholder={"Selecciona la Incidencia"}
                    defaultOption={{key:'RO',value:'Robo'}}
                  >
                  </SelectList>
              </View>
              <View>
                <Text>Hora</Text>
                <SelectList
                setSelected={setHour}
                  data={hourPMandAM}
                  placeholder={"Selecciona la hora de delito"}
                ></SelectList>
              </View>
              <View>
                <Text>Consumo</Text>
                <SelectList
                setSelected={setConsumo}
                  data={consumoDroga}
                  placeholder={"Selecciona"}
                ></SelectList>
              </View>
              <View>
                <Text>Venta</Text>
                <SelectList
                setSelected={setVenta}
                  data={ventaDroga}
                  placeholder={"Selecciona"}
                ></SelectList>
              </View>
              <View>
                <Text>Ingresa Ubicación</Text> 
                <MapView style={stylesDenuncia.map}></MapView>
              </View>
              <View style={styles.button}>
                    <TouchableOpacity style={styles.boxButton} >
                        <Text style={styles.TextButton}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View> 
      </ScrollView>
        
    </SafeAreaView>
  )
}