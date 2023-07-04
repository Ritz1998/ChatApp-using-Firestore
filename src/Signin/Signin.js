import React, { useState } from "react";
import {ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,TextInput}  from 'react-native';
import styles from "./styles";


const Signin =({navigation})=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    

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
                  placeholder="Create password"
                  placeholderTextColor="#333"
                  secureTextEntry
                />
               
              </View>
  
            
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Signup Now</Text>
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
      </ImageBackground>
    )
}
export default Signin
