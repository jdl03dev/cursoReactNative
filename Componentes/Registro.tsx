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
      <View style={estilos.contReg}>
        <Text style={estilos.texto}> Sing Up</Text>
          <View style={estilos.conten_Picker}>
            
            <Picker
              selectedValue={seleccionado}
              style={estilos.picker}
              onValueChange={(itemValue) => setSeleccionado(itemValue)}
            >
              <Picker.Item label="Tarjeta de Identidad" value="TI" style={estilos.inputReg} />
              <Picker.Item label="Cedula de Ciudadania" value="CC" style={estilos.inputReg}/>
              <Picker.Item label="Pasaporte" value="PP" style={estilos.inputReg}/>
            </Picker>
          </View>
          <View>

                <TextInput keyboardType="numeric" placeholder="Numero de Documento" 
                style={estilos.inputReg}
                />
                <TextInput placeholder="Nombre" 
                style={estilos.inputReg}
                />
                <TextInput keyboardType="email-address" placeholder="Email-Address" 
                style={estilos.inputReg}
                />
                <TextInput keyboardType="numeric" placeholder="Telefono" 
                style={estilos.inputReg}
                />
                <TextInput placeholder="Contraseña"secureTextEntry 
                style={estilos.inputReg}
                />
                <TextInput placeholder="Confirmar Contraseña"secureTextEntry 
                style={estilos.inputReg}
                />
          </View>
                <TouchableOpacity style={estilos.boton}>
                  <Text style={estilos.botonTexto}>Sign Up</Text>
                </TouchableOpacity>
          
      </View>
      </ScrollView>
     
    </ImageBackground>
  );
}