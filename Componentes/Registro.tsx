import React, { useState, useRef } from "react";
import estilos from "./Style"
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

export default function Registro() {
  const [seleccionado, setSeleccionado] = useState("TI");
  return (

    <ImageBackground
        source={require("../img/fondo_Login.jpg")}
        style={estilos.fondo}
        resizeMode="cover"
    >

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
      <View style={estilos.conten_Form}>
        <Text style={estilos.texto}> Sing Up</Text>
          <View style={estilos.conten_Picker}>
            
            <Picker
              selectedValue={seleccionado}
              style={estilos.picker}
              onValueChange={(itemValue) => setSeleccionado(itemValue)}
            >
              <Picker.Item label="Tarjeta de Identidad" value="TI" style={estilos.input} />
              <Picker.Item label="Cedula de Ciudadania" value="CC" style={estilos.input} />
              <Picker.Item label="Pasaporte" value="PP" style={estilos.input} />
            </Picker>
          </View>
          <View>
          
                <TextInput style={estilos.input} placeholder="Nombre" />
                <TextInput keyboardType="numeric" style={estilos.input} placeholder="Numero de Documento"/>
                <TextInput keyboardType="email-address" style={estilos.input} placeholder="Email-Address"/>
                <TextInput keyboardType="numeric" style={estilos.input} placeholder="Telefono"/>
                <TextInput style={estilos.input} placeholder="Contraseña"secureTextEntry/>
                <TextInput style={estilos.input} placeholder="Confirmar Contraseña"secureTextEntry/>
          </View>
                <TouchableOpacity style={estilos.boton}>
                  <Text style={estilos.botonTexto}>Sign Up</Text>
                </TouchableOpacity>
          
      </View>
      </ScrollView>
     
    </ImageBackground>
  );
}