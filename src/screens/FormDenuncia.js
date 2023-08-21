import { SafeAreaView, Text, TextInput, View, Picker, SectionList, Button,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/stylesLogin'
import { useState } from 'react';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import stylesDenuncia from '../styles/stylesDenuncia';
//import SelectList from 'react-native-dropdown-select-list'


export default function FormDenuncia() {
  const [category, setCategory] = useState();
  const [subcategory,setSubCategory]=useState();
  const [circuito,setSubcircuito]=useState();
  const [robo, setRobo]=useState();


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
    


  return (
    <SafeAreaView style={stylesDenuncia.container}>
      <View>
        <Text>Llena el Formulario</Text>
        <View style={stylesDenuncia.card}options={{scroll:true}}>
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
            <Text>Incidencia</Text>
            <SelectList  
                setSelected={setRobo}
                data={incidencia}
                placeholder={"Selecciona la Incidencia"}
                defaultOption={{key:'RO',value:'Robo'}}
              >
              </SelectList>
          </View>
          <View style={styles.button}>
                <TouchableOpacity style={styles.boxButton} >
                    <Text style={styles.TextButton}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}