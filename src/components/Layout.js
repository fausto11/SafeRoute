import { View, StyleSheet } from 'react-native'
import React from 'react'




const Layout = ({children}) => {


  return (
   
    <View style={styles.container}>
      {children}
    </View>
   
    
    
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#222f3e",
        padding:20,
        alignItems:"center"
    },
})
export default Layout