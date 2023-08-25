const API='http://192.168.100.137:5431/reports'

export const getReports=async()=>{
    const res= await fetch(API)
    return await res.json();
    
}

export const saveReport=async(newReport)=>{
    const res= await fetch(API,
        {method:'POST',
        headers:{Accept: 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify(newReport)
    })
    return await res.json();
}

export const deleteReport=async(id)=>{
    await fetch(`${API}/${id}`,{method:'DELETE',

})
}

const APISAFE='http://192.168.100.137:5000/route'

export const getSavePath=async(newRoute)=>{
    const res= await fetch(APISAFE,{
        method:'POST',
        headers:{
            Accept: 'application/json','Content-Type': 'application/json'
        },
        body: JSON.stringify(newRoute)
    })
    return await res.json();
}