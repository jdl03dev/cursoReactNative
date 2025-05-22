import React from "react";
import {Text, StyleSheet, View, TextInput, Image, Touchable, TouchableOpacity, Dimensions, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const estilos = StyleSheet.create({
  contenedor:{
    width: '100%',
  //  height: 160,
  //  padding: 20,
  //  backgroundColor: '0000'
  },
  texto:{
    textAlign: 'center',
    fontSize:50,
    color:'#3e4444',
    marginBottom: 5
  },
  
  input:{
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 15,
    flex: 1
  },
  cont_img:{
    display:'flex',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 'auto',
  },

  img_login:{
    width: 100,
    height:100,
    
  },

  icon:{
  width:60,
  height:50,
  marginTop: 5,
  marginBottom: 5
  },

  boton:{
    width:Dimensions.get("screen").width*0.15,

  //backgroundColor:'#d5f4e6',
  //borderColor:'grey',
  //borderWidth:1.5,
  //borderRadius:10,
  //justifyContent:'center',
  //alignItems:'center'
  },

  Ctareas:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10,
    marginTop:10
  },
  dataTask:{
    paddingVertical:20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth:1
  },
  check:{
    flexDirection: 'row',
    alignItems: 'center',
    
  }
})
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
          <Image source={require('./img/list.png')} style={estilos.img_login}/>
    </View>

    <View style={estilos.Ctareas}>  
      <TextInput placeholder="Escribir:" style={estilos.input}/>
      <TouchableOpacity style={estilos.boton}>
        <Image source={require('./img/addTask_icon.png')} style={estilos.icon}/>
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