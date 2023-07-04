/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
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
import Signin from './src/Signin/Signin';
import Signup from './src/Signup/Signup';



function App(){
 const Stack=createStackNavigator()
  return (
    <NavigationContainer>

     <Stack.Navigator
     screenOptions={({ route, navigation }) => ({
      headerShown: false
     
    })}
     >
      <Stack.Screen name="singup" component={Signup}    />
      <Stack.Screen name="signin" component={Signin} />
      
    </Stack.Navigator>
    </NavigationContainer>
 

      
   
    
  );
}



export default App;
