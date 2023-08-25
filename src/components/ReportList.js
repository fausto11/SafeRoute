import { Text,FlatList, RefreshControl } from 'react-native'
import React,{useState,useEffect} from 'react'
import ReportItem from './ReportItem';
import { getReports } from '../api/api';
import { deleteReport } from '../api/api';


const ReportList = () => {

    const[refreshing,setRefreshing] = useState(false)
    const [reports, setReports] = useState([]);

    const renderItem=({item})=>{
        return  <ReportItem reports={item} handleDelete={handleDelete}></ReportItem>
    }


    const loadTask=async()=>{
      const data= await getReports()
      setReports(data)
    }
    useEffect(()=>{
      loadTask()
    },[])
  
    const handleDelete=async (id)=>{
        await deleteReport(id)
        await loadTask()
    }

    const onRefresh=React.useCallback(async ()=>{
        setRefreshing(true)
        await loadTask()
        setRefreshing(false)
    })

  return (
    <FlatList
    style={{width:"100%"}}
        data={reports}
        keyExtractor={(item)=>item.id+''}
        renderItem={renderItem}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            colors={["#78e08f"]}
                onRefresh={onRefresh}
            ></RefreshControl>
        }
    ></FlatList>
  )
}

export default ReportList