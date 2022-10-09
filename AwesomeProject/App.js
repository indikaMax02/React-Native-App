/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text,View} from 'react-native';

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import { Header } from 'react-native/Libraries/NewAppScreen';
import CreateAccountPage from './screens/CreateAccountPage';
import ManageDetailsPage from './screens/ManageDetailsPage';
import DetailsAddPage from './screens/DetailsAddPage';
import DashBoard from './screens/DashBoard';


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
   
      <Stack.Screen options={{headerShown : false}} name="Login" component={LoginPage}/>
      <Stack.Screen options={{headerShown : false}}  name="ManageDetailsPage" component={ManageDetailsPage} />

      <Stack.Screen options={{headerShown : false}}  name="CreateAccount" component={CreateAccountPage} />
      <Stack.Screen options={{headerShown : false}}  name="DashBoard" component={DashBoard} />
       <Stack.Screen options={{headerShown : false}}  name="DetailsAddPage" component={DetailsAddPage} />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

export default App;
