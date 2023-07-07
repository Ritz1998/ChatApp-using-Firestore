import { Dimensions, StyleSheet } from "react-native";


const styles=StyleSheet.create({
Userscontainer:{
    flex:1,
    backgroundColor:"#ffffff"

},
settingContainer:{
    flex:1,
    backgroundColor:"#ffffff"

},
userHeader:{
    flex:1,
    width:"100%",
    height:60,
    backgroundColor:"#ffffff",
    elevation:5,
    justifyContent:"center",
    alignItems:"center"

},
title:{
    color:"purple",
    fontSize:18,
    fontWeight:"bold",
    letterSpacing:0.9,
    marginTop:20

},
userList:{
    width:Dimensions.get('window').width-50,
    alignSelf:"center",
    marginTop:20,
    flexDirection:"row",
    height:60,
    borderWidth:0.5,
    borderRadius:10,
    marginBottom:20,
    alignItems:"center",
    padding:5
},
userImg:{
    width:30,
    height:30
},
userName:{
    color:"#000000",
    marginLeft:12,
    fontSize:16
}
})

export default styles