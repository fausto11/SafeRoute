import { StyleSheet } from "react-native";


const stylesMaps=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff'
    },
    map:{ 
        paddingBottom:20,
        height:'70%',
        width:'100%'
    },
    card:{

        margin:20,
        backgroundColor:'#ffff',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    boxText:{
       
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:10,
        marginVertical:10
        
    },
    button:{
        
        alignItems:'center',
        
    },
    boxButton:{
        
        backgroundColor:'#525fe1',
        borderRadius:30,
        paddingVertical:10,
        width:150,
        marginTop:10
    },
    TextButton:{
        textAlign:'center',
        color:'#ffff'
    },
    
}  
)

export default stylesMaps