import React, { useState } from "react";
import {ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,TextInput, Alert}  from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore"
import uuid from  "react-native-uuid"

const Signup =({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState('')
    const [name, setName] = useState("")



    const registerUser=()=>{
        const userId=uuid.v4()

        if(email && password && confPassword && name){
            if(password == confPassword){

                firestore().collection("users").doc(userId).set({
                    email:email,
                    password:password,
                    userId:userId,
                    name:name
                }).then(res=>{
                    console.log("RESPONSE REGISTERUSER",res)

                    Alert.alert("User signup successfully!")

                    navigation.navigate("signin")
        
                }).catch((error)=>{
                    console.log("ERROR REGISTERUSER",error)
                })
            }else{
                Alert.alert("Both password doesnt matched!")


            }

        }else(
            Alert.alert("Please enter all the details!")
        )


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
                
                  autoCorrect={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#333"
                
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
                <Text style={styles.loginSignupText}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.signupLink}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
  
            {/* Signup Form */}
            <View style={styles.form}>
              <Text style={styles.formTitle}>Signup</Text>

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
                  value={email}
                  onChangeText={(text)=>setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
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
  
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor="#333"
                  value={confPassword}
                  onChangeText={(text)=>setConfPassword(text)}
                  secureTextEntry
                />
               
              </View>
  
              <TouchableOpacity style={styles.button}
              onPress={()=>registerUser()}
              >
                <Text style={styles.buttonText}>Signup Now</Text>
              </TouchableOpacity>
  
              <View style={styles.loginSignup}>
                <Text style={styles.loginSignupText}>Already have an account? </Text>
                <TouchableOpacity  onPress={()=>navigation.navigate("signin")}>
                  <Text style={styles.signupLink}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
}
export default Signup
