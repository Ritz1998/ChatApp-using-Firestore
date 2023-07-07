import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const SplashScreen =({navigation})=>{
    useEffect(() => {
        checkLogin()
        
    }, [])
    const checkLogin =async()=>{
        const id=  await AsyncStorage.getItem("Userid")
        if(id!==null){
           navigation.navigate("home")
        }else{
          navigation.navigate("signin")
        }
      }

    return(
        <View>

        </View>
    )
}
export default SplashScreen