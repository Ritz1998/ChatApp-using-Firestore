import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"

    },
    bottomTab:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:70,
        backgroundColor:"purple",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"


    },
    tab:{
        borderRightWidth:1,
        borderColor:"#000000",
        
        width:"50%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
        
    },
    tabIcon:{width:30,height:30,borderRadius:25}



})
export default styles