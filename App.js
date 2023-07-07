/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Chat from './src/ChatScreen/Chat';
import Home from './src/Home/Home';
import Signin from './src/Signin/Signin';
import Signup from './src/Signup/Signup';
import SplashScreen from './src/SplashScreen/SplashScreen';



function App(){

  
 const Stack=createStackNavigator()


  return (
    <NavigationContainer>

     <Stack.Navigator
     screenOptions={({ route, navigation }) => ({
       
    })}
     >
      <Stack.Screen name="splashscreen" component={SplashScreen}    />
      
      <Stack.Screen name="singup" component={Signup}  headerShown={false}    />
      <Stack.Screen name="signin" component={Signin}  headerShown={false} />
      <Stack.Screen name="home" component={Home}  headerShown={false} />
      <Stack.Screen name="chat" component={Chat} headerShown={true}/>
      
    </Stack.Navigator>
    </NavigationContainer>
 

      
   
    
  );
}



export default App;
