import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './screens/Login';
import BoasVindas from './screens/BoasVindas';
import Cadastrar from './screens/Cadastrar';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Acesso" component={Login} />
      <Stack.Screen name="Principal" component={BoasVindas} />
      <Stack.Screen name="Cadastro" component={Cadastrar} />
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
