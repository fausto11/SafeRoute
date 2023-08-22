import { View, Text, Button ,Alert, SafeAreaView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import stylesUser from '../styles/styleUser'
import Report from '../components/Report';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function Home() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 
  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.100.137:5143/reports/1");
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  function clearTodo(id){
    setReports(reports.filter((report)=>report.id !== id))
  }

  function toggleReport(id){
    setReports(
      reports.map((report)=>
        report.id === id
        ? {...report, completed: report.completed ===1 ? 0: 1}
        : report
      )
    )
  }

  return (
    <BottomSheetModalProvider>
      <View style={stylesUser.container}>
        <SafeAreaView >
        <FlatList
          data={reports}
          keyExtractor={(report)=>report.id}
          renderItem={({item})=>(
            <Report {...item} toggleReport={toggleReport} clearTodo={clearTodo}/>
          )}
          ListHeaderComponent={()=><Text style={stylesUser.title}>Today</Text>}
          contentContainerStyle={stylesUser.contentContainerStyle}
          />
          </SafeAreaView>
      </View>
    </BottomSheetModalProvider>
    
    
  );
}
