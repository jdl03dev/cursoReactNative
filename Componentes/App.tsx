import React from "react";
import {Text, StyleSheet, View, TextInput, Image, Touchable, TouchableOpacity, Dimensions, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import estilos from "./Style"
const tasks=[{
  titulo:"Estudiar",
  done:false,
  date:new Date()
},
{
  titulo:"Jugar",
  done:false,
  date:new Date()
},
{
  titulo:"Caminar",
  done:false,
  date:new Date()
}
]
interface Task{
  titulo:string,
  done:boolean,
  date:Date
}
function renderItem({item}:{item:Task}){
  return (

  //const [isChecked, setIsChecked] = useState(false);
  <View style={estilos.dataTask}>

  <Text>{item.titulo}</Text>
  </View>
  )
}

export default function App(){
return(
  <View style={estilos.contenedor}>
    <Text style={estilos.texto}>Tareas</Text>
    <View style={estilos.cont_img}>
          <Image source={require('../img/list.png')} style={estilos.img_Login}/>
    </View>

    <View style={estilos.Ctareas}>  
      <TextInput placeholder="Escribir:" style={estilos.input}/>
      <TouchableOpacity style={estilos.boton}>
        <Image source={require('../img/addTask_icon.png')} style={estilos.icon}/>
      </TouchableOpacity>
    </View>
    <View>
      <FlatList
      renderItem={renderItem}
      data={tasks}
      />
    </View>     
    
  </View>
)
}