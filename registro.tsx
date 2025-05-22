import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Picker } from '@react-native-picker/picker';

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    paddingHorizontal: 80,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 15,
    marginTop: 10,

    backgroundColor: "#fff",
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
    marginBottom: 50
  },
  picker: {
    height: 50,
    width: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default function Registro() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const animacion = useRef(new Animated.Value(300)).current; // comienza fuera de la pantalla

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

              <Text style={estilos.input}> Tipo Documento: </Text>
              
              <Picker style={estilos.picker}>
                <Picker.Item label ="CC" />
                <Picker.Item label = "CE"/>

              </Picker>
              
              <TextInput style={estilos.input} placeholder="Documento"/>
              <TextInput style={estilos.input} placeholder="Email-Address"/>
              <TextInput style={estilos.input} placeholder="Telefono"/>
              <TextInput style={estilos.input} placeholder="Contraseña"secureTextEntry/>
              <TextInput style={estilos.input} placeholder="Confirmar Contraseña"secureTextEntry/>
              
              <TouchableOpacity style={estilos.boton}>
                <Text style={estilos.botonTexto}>Sign Up</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
