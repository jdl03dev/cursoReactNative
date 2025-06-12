import { StyleSheet, Dimensions } from "react-native";

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  addButton:{
   // marginHorizontal:80,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8
  },
  boton: {
    width: 300,
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
  contReg:{  //Contenedor Principal de Componente Registro
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
   contLog:{  //Contenedor Principal de Componente Registro
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  contenedorApp: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  conten_Picker: {
  borderRadius: 15,
  overflow: 'hidden', // 👈 importante para que el picker respete los bordes redondeados
  borderColor: '#999',
  marginVertical: 10,
  width: '80%',
  marginBottom: -0.1,
  },
  cont_img:{
    display:'flex',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 'auto',
  },
  inputLog: {
    width:300,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  inputReg: {
    width:300,
    height: 50,
    borderColor: "#2196F3",
    borderWidth: 1.8,
    borderRadius: 15,
    marginTop: 10,
    textAlign:'left',
    backgroundColor: "white",
    opacity:0.95,
    
  },
  img_Login:{
    width: 100,
    height:100,
    marginTop: 100,
  },
  icon:{
  width:60,
  height:50,
  marginTop: 5,
  marginBottom: 5
  },
  picker: {
    height: 50,
    borderColor: "red",
    backgroundColor: 'white',
    borderRadius: 15,
    opacity:0.95,
    overflow:'hidden',
   
  },
  textoApp:{
    
    fontSize:50,
    color:'white',
    marginTop:100,
    marginBottom: 50
  },
  Ctareas:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10,
    marginTop:10
  },
  dataTask0:{
    paddingVertical:20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth:1
  },
  check:{

    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20,
    borderBlockColor: 'white'
  },
  texto:{
    textAlign:'center',
    fontSize:50,
    color:'white',
    marginTop:50,
    marginBottom: 15,
    },
  scrollContainer: {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  },

tareaHecha: {
  textDecorationLine: 'line-through',
  color: '#999',
},
textoTarea: {
  flex: 1,
  fontSize: 16,
},
botonEliminar: {
  fontSize: 18,
  paddingHorizontal: 10,
},
dataTask: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  marginVertical: 4,
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
},

})

export default estilos