import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff'
    },

    image:{
        width: '100%',
        height:'100%',
        resizeMode:'cover',

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
    profilePictures:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'#ffff',
        borderWidth:1,
        marginVertical:30
    },
    boxText:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
        
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
    }
})

export default styles