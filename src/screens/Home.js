import { View, Text, Button ,Alert} from 'react-native'
import React from 'react'
import app from '../api/firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'
import stylesUser from '../styles/styleUser'

const auth=getAuth(app)
export default function Home(props) {

    const close =async()=>{
        try {
            await signOut(auth)
            Alert.alert('Cerrando Sesion')
            props.navigation.navigate('Login')
        } catch (error) {
            Alert.alert('Error')
        }
    }
  return (
    <View style={stylesUser.container}>
      <View>
        
      </View>
      <Text>Bienvenido</Text>
      <Button title='Close' onPress={close}>Close</Button>
    </View>
  )
}