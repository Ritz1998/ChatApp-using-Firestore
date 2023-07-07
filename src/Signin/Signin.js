import React, { useState } from "react";
import {ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,TextInput, Alert}  from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore"
import Loader from "../Loader/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Signin =({navigation})=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loader, setLoader] = useState(false)

    
  const onLogin=()=>{
    setLoader(true)
    console.log("EMAIL",email)
    firestore().collection("users")
            .where("email","==",email).get().then((res)=>{
              if(res.docs[0].data()){

                console.log("RESPOSNSE LOGIN",res.docs[0].data())
                proceedToNext(
                  res.docs[0].data().email,
                  res.docs[0].data().userId,
                  res.docs[0].data().name

                  )
                  Alert.alert("User Logged in Successfully!")
                  navigation.navigate("home")
                setLoader(false)
              }else{
                Alert.alert("User not found!")
                setLoader(false)
              }
    }).catch((err)=>{
      console.log("ERROR ON LOGIN",err)
      setLoader(false)
    })
  }

  const proceedToNext =async  (email,userId,name)=>{
    AsyncStorage.setItem("email",email)
    AsyncStorage.setItem("Userid",userId)
    AsyncStorage.setItem("name",name)

  }
    return(
        <ImageBackground source={require('./chatAppBackground.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* Header */}
        
  
          {/* Home */}
          <View style={styles.home}>
            {/* Login Form */}
            <View style={styles.form}>
              <Text style={styles.formTitle}>Login</Text>
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#333"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  autoCorrect={false}
                  onChangeText={(text)=>setEmail(text)}
                />
              </View>
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#333"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}

                  secureTextEntry
                />
              
              </View>
  
              <View style={styles.optionField}>
                <View style={styles.checkbox}>
                  <TouchableOpacity style={styles.checkboxContainer}>
                  </TouchableOpacity>
                  <Text style={styles.checkboxLabel}>Remember me</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgotPw}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
  
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login Now</Text>
              </TouchableOpacity>
  
              <View style={styles.loginSignup}>
                <Text style={styles.loginSignupText}></Text>
                <TouchableOpacity>
                  <Text style={styles.signupLink}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
  
            {/* Signup Form */}
            <View style={styles.form}>
              <Text style={styles.formTitle}>SignIn</Text>


              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor="#333"
                  keyboardType="name-phone-pad"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={name}
                  onChangeText={(text)=>setName(text)}
                />
              </View>
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#333"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={(text)=>setEmail(text)}
                />
              </View>
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Create password"
                  placeholderTextColor="#333"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}

                  secureTextEntry
                />
               
              </View>
  
            
              <TouchableOpacity style={styles.button} onPress={()=>onLogin()}>
                <Text style={styles.buttonText}>Signin Now</Text>
              </TouchableOpacity>
  
              <View style={styles.loginSignup}>
                <Text style={styles.loginSignupText}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("singup")}>
                  <Text style={styles.signupLink}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
       {loader? <Loader/>:""}
      </ImageBackground>
    )
}
export default Signin
