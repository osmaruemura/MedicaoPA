import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Acesso from './screens/Acesso';
import BoasVindas from './screens/BoasVindas';
import Cadastrar from './screens/Cadastrar';
import EntradaDados from './screens/EntradaDados';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Acesso" component={Acesso} />
      <Stack.Screen name="Boas Vindas" component={BoasVindas} />
      <Stack.Screen name="Cadastro" component={Cadastrar} />
      <Stack.Screen name="Entrada de Dados" component={EntradaDados} />
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
