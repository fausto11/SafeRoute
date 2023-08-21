import { View,SafeAreaView, Text,Image,ScrollView,TouchableOpacity,TextInput,Button, Alert } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import styles from '../styles/stylesLogin'
import app from '../api/firebaseConfig'
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential} from 'firebase/auth'
import { useState } from 'react'
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const auth=getAuth(app)



export default function Login(props) {

    const [email,setEmail]= useState()
    const [password,setPassword]= useState()

  


    const logueo =async()=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert('Iniciando sesion', 'Accediendo..')
            props.navigation.navigate('Home')
        } catch (error) {
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user =userCredential.user
            props.navigation.navigate('Home')
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image source={require('../assets/perfil.jpg')} style={styles.profilePictures}></Image>
        </View>
        <View style={styles.card} >
            <View style={styles.boxText}>
                <TextInput onChangeText={(text)=>setEmail(text)} placeholder='correo@gmail.com' style={styles.input}></TextInput>
            </View>
            <View style={styles.boxText}>
                <TextInput onChangeText={(text)=>setPassword(text)} placeholder='password' style={styles.input} secureTextEntry={true} ></TextInput>
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.boxButton} onPress={logueo}>
                    <Text style={styles.TextButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.boxButton} onPress={createUser}>
                    <Text style={styles.TextButton}>Create Account</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    </SafeAreaView>
  )
}