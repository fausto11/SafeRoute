import { View ,Text, TouchableOpacity, Pressable,StyleSheet} from "react-native";
import stylesReport from "../styles/styleReport";
import {Feather} from "@expo/vector-icons"
import { useState } from "react";
import * as React from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SharedReportModalContent from "./SharedReportModalContent";
import ReportModalContent from "./ReportModalContent";



function CheckMark({id,completed,toggleReport}){
    async function toggle(){
        const response= await fetch(`exp://192.168.100.137:19000/reports/${id}`,{
            method:"PUT",
            body: JSON.stringify({
                value: completed ? false : true
            })
        })
        const data= await response.json()
        toggleReport(id)
        console.log(data)
    }
    return(
        <Pressable 
            onPress={toggle}
            style={[stylesReport.checkMark,{backgroundColor: completed===0 ?"#E9E9F":"#0EA5E9"}]}>
        </Pressable>
    )
   
}



export default function Report({
    id,
    parroquia,
    distrito,
    circuito,
    delito,
    hour,
    shooting,
    consumo_droga,
    venta_droga,
    indice,
    latitud,
    longitud,
    year,
    location,
    completed,
    shared_with_id,
    clearTodo,
    toggleReport
}){
    const [isDeleteActive,setIsDeleteActive]=useState(false)
    const bottomSheetModalRef=React.useRef(null)
    const sharedBottomSheetRef= React.useRef(null)
    const snapPoints=["25%","48%","75%"]
    const snapPointsShared=["40%"]


    function handlePresentModal(){
        bottomSheetModalRef.current?.present();
    }

    function handlePresentShared(){
        sharedBottomSheetRef.current?.present();
    }

    async function deleteTodo(){
        const response= await fetch(`exp://192.168.100.137:19000/reports/${id}`,{
            method:"DELETE"
        });
        clearTodo(id);
        console.log(response.status)
    }


    return(
        <TouchableOpacity 
            onLongPress={()=> setIsDeleteActive(true)}
            onPress={()=> setIsDeleteActive(false)}
            activeOpacity={0.9}
            style={stylesReport.container} 
        >
        <View style={stylesReport.containerTextCheckBox}>
            <CheckMark id={id} completed={completed} toggleReport={toggleReport}/>
            <Text style={stylesReport.text}>{delito} en {circuito}</Text>
        </View>
        {shared_with_id !== null ?(
            <Feather
                onPress={handlePresentModal}
                name="users"
                size={20}
                color="#383839"
            ></Feather>
        ):(
            <Feather
                onPress={handlePresentShared}
                name="share"
                size={20}
                color="#383839"
            ></Feather>
        )}
        {isDeleteActive &&(
            <Pressable onPress={deleteTodo} style={stylesReport.deleteButton}>
                <Text style={{color:"white" , fontWeight:"bold"}}>x</Text>
            </Pressable>
        )}

        <BottomSheetModal
            ref={sharedBottomSheetRef}
            snapPoints={snapPointsShared}
            backgroundStyle={{borderRadius:50, borderWidth:4}}
        >
            <SharedReportModalContent
                id={id}
                circuito={circuito}
                delito={delito}
                shared_with_id={shared_with_id}
                completed={completed}
            ></SharedReportModalContent>
        </BottomSheetModal>
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={2}
            snapPoints={snapPoints}
            backgroundStyle={{borderRadius:50, borderWidth:4}}
        >
            <ReportModalContent id={id} delito={delito}></ReportModalContent>
        </BottomSheetModal>
       
        </TouchableOpacity>
    )
}