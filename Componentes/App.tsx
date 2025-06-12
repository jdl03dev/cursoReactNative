import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from 'react-native-screens';
enableScreens();

import Registro from "./Registro";
import Login from "./Login";
import Tareas from "./Tareas";

export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Tareas: undefined;
 // Details: { userId: string }; // si piensas usarla
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Tareas" component={Tareas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
