import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import stylesReport from '../styles/styleReport';

export default function SharedReportModalContent({
id,
circuito,
delito,
shared_with_id,
completed

}){
    const [author,setAuthor]=useState({});
    const [sharedWith, setSharedWith]=useState({});

    useEffect(()=>{
        fetchInfo();
    },[]);

    async function fetchInfo(){
        const response= await fetch(
           `exp://192.168.100.137:19000/reports/shared_reports/${id}`,
           {
            headers:{
                method:"GET"
            }
           } 
        );
        const {author,shared_with}=await response.json();
        setAuthor(author);
        setSharedWith(shared_with);
    }
    return(
        <View style={stylesReport.contentContainer}>
            <Text style={[stylesReport.title , {marginBottom:20}]}>Shared Report</Text>
            <Text style={[stylesReport.title , {marginBottom:20}]}>"{delito}"</Text>
            
            <Text style={[stylesReport.description]} >PARTICIPANTES</Text>
            <View style={{ flexDirection: "row" }}>
                <View  style={stylesReport.participant}>
                <Text style={[stylesReport.description, { color: "white" }]}>
                    {author.name}
                 </Text>
                </View>
                <View style={stylesReport.participant}>
                    <Text style={[stylesReport.description, { color: "white" }]}>
                        {sharedWith.name}
                    </Text>
                </View>
            </View>
            
        </View>
    )
}