import React from "react";
import {Text, StyleSheet, View, TextInput, Image, Touchable, TouchableOpacity } from "react-native";


const estilos = StyleSheet.create({
  contenedor:{
    width: '100%',
    height: 160,
    padding: 20,
    backgroundColor: '0000'
  },
  titulo:{
    textAlign: 'center',
    fontSize:50,
    color:'#3e4444',
    marginBottom: 5
  },
  texto:{
    fontSize: 30,
    color: '#3e4444',
    textAlign: 'right'
  },
  
  input:{
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 15
  },
  boton:{
    width: 20,
    height: 20,
    

  },
   icon: {
    position: 'absolute', // Posiciona el ícono de forma absoluta
    right: 10, // Alinea el ícono al lado derecho
    top: '50%', // Centra el ícono verticalmente
    transform: [{ translateY: -10 }], // Ajusta la alineación exacta del ícono (opcional)
    width: 20, // Ajusta el tamaño del ícono
    height: 20, // Ajusta el tamaño del ícono

  },
  emoji:{
    width:50,
    height:50
  }

})

export default function App(){
return(
  <View style={estilos.contenedor}>
    <Text style={estilos.titulo}>Mis Tareas</Text>
    <View>
      
      <TextInput placeholder="Escribir:" style={estilos.input}/>
      
      <TouchableOpacity >
        <Image style={estilos.icon} source={require('./img/send_icon.png')}/>
      </TouchableOpacity>


    </View>

    <Image style={estilos.emoji} source={require('./img/emoji.jpg')}/>
    
  </View>
)
}