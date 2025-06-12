import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App"; // Asegúrate de que esté bien definido
import estilos from "./Style";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<Props> = ({ navigation }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const animacion = useRef(new Animated.Value(300)).current;

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
        <View style={estilos.contLog}>
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
              <TextInput style={estilos.inputLog} placeholder="Usuario" />
              <TextInput
                style={estilos.inputLog}
                placeholder="Contraseña"
                secureTextEntry
              />

              <TouchableOpacity
                style={estilos.boton}
                onPress={() => navigation.navigate("Home")} // Cambia esto si tienes otra pantalla
              >
                <Text style={estilos.botonTexto}>Sign In</Text>
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
};

export default Login;
