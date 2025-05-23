import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";


import { Picker } from '@react-native-picker/picker';
import { Provider as PaperProvider } from 'react-native-paper';

import estilos from "./Style"

export default function Registro() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState("CC");

  return (

    <ImageBackground
        source={require("../img/fondo_Login.jpg")}
        style={estilos.fondo}
        resizeMode="cover"
    >

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        
      >

        <View style={estilos.contenedor}>
            <Text style={estilos.texto}> Sing Up</Text>

              <TextInput style={estilos.input} placeholder="Nombre" />

              <TextInput style={estilos.input} placeholder="Tipo de Documento"/>
              <TextInput keyboardType="numeric" style={estilos.input} placeholder="Numero de Documento"/>
              <TextInput keyboardType="email-address" style={estilos.input} placeholder="Email-Address"/>
              <TextInput keyboardType="numeric" style={estilos.input} placeholder="Telefono"/>
              <TextInput style={estilos.input} placeholder="Contraseña"secureTextEntry/>
              <TextInput style={estilos.input} placeholder="Confirmar Contraseña"secureTextEntry/>
              
              <TouchableOpacity style={estilos.boton}>
                <Text style={estilos.botonTexto}>Sign Up</Text>
              </TouchableOpacity>

        </View>
      </ScrollView>
     
    </ImageBackground>
  );
}