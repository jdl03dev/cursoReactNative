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
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";

import { Picker } from '@react-native-picker/picker';
import { Provider as PaperProvider } from 'react-native-paper';


const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  contenedor: {

    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width:300,
    borderColor: "black",
    borderWidth: 1.8,
    borderRadius: 15,
    marginTop: 10,
    textAlign:'center',
    backgroundColor: "white",
  },
  img_Loging: {
    width: 208,
    height: 208,
    marginBottom: 20,
  },
  boton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 15,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  texto:{
    textAlign: 'center',
    fontSize:50,
    color:'white',
    marginTop:50,
    marginBottom: 15,
    },
  picker: {
    height: 50,
    width: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  scrollContainer: {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  },

});

export default function Registro() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const animacion = useRef(new Animated.Value(300)).current; // comienza fuera de la pantalla
  const [tipoDocumento, setTipoDocumento] = useState("CC");

  const mostrarConAnimacion = () => {
    if (!mostrarFormulario) {
      setMostrarFormulario(true);
      Animated.timing(animacion, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={mostrarConAnimacion}>
      <ImageBackground
        source={require("./img/fondo_Login.jpg")}
        style={estilos.fondo}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={estilos.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <ScrollView
              contentContainerStyle={estilos.scrollContainer}
              keyboardShouldPersistTaps="handled"
            ></ScrollView>

        <View style={estilos.contenedor}>
          {mostrarFormulario && (
            <Animated.View
              style={{
                transform: [{ translateY: animacion }],
                alignItems: "center",
              }}
            >
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
            </Animated.View>
          )}
        </View>
          </ScrollView>
        </KeyboardAvoidingView>        
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}