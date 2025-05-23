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
import estilos from "./Style"

export default function Login() {
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
        source={require("../img/fondo_Login.jpg")}
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
              <Image
                source={require("../img/login.png")}
                style={estilos.img_Login}
              />
              <TextInput style={estilos.inputLogin} placeholder="Usuario" />
              <TextInput style={estilos.inputLogin} placeholder="Contraseña"
                secureTextEntry
              />

              <TouchableOpacity style={estilos.boton}>
                <Text style={estilos.botonTexto}>Sing In</Text>
              </TouchableOpacity>
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
