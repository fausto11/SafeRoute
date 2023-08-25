import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const ReportItem = ({reports,handleDelete}) => {
  return (
    <View style={styles.itemContainer}>
        <TouchableOpacity>
            <Text style={styles.itemTitle}>{reports.categoria}</Text>
             <Text style={styles.itemTitle}>en {reports.circuito}</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={{backgroundColor:"#ee5253",padding:7,borderRadius:5}}
        onPress={()=>handleDelete(reports.id)}
      >
        <Text style={{color:"white"}}>DELETE</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"white",
        padding:20,
        marginVertical:8,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemTitle:{
        color:"green"
    }
})
export default ReportItem