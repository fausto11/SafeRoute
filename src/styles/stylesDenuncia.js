import { StyleSheet,StatusBar } from "react-native";


const stylesDenuncia=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    button:{
        
        alignItems:'center',
        
    },
    boxButton:{
        backgroundColor:'#525fe1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    TextButton:{
        textAlign:'center',
        color:'#ffff'
    },
    
    card:{
        margin:10,
        backgroundColor:'#ffff',
        borderRadius:10,
        width:'95%',
        height:'100%',
        padding:5,
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
        borderRadius:30,
        marginVertical:50
        
    },
    scrollView: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'white',
        
      },
      mapContainer:{ 
        paddingBottom:1,
        height:400,
        borderRadius: 10,
        overflow: 'hidden',
        width:'100%'
    },
    map:{
        flex:1,
    },
    preguntaContainer: {
        marginBottom: 10,
    },
    containerView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
})

export default stylesDenuncia