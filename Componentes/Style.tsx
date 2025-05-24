import { StyleSheet, Dimensions } from "react-native";

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  conten_Form:{  //Contenedor Principal de Componente Registro
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  contenedor: {
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
  inputLogin: {
    paddingHorizontal: 80,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: "#fff",
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
  picker: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
   
  },
  cont_img:{
    display:'flex',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 'auto',
  },
  img_Login:{
    width: 100,
    height:100,
  },
  icon:{
  width:60,
  height:50,
  marginTop: 5,
  marginBottom: 5
  },
  botonAdd:{
    width:Dimensions.get("screen").width*0.15,
    borderRadius: 10,
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
  textoApp:{
    textAlign: 'center',
    fontSize:50,
    color:'#3e4444',
    marginBottom: 5
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
    
  },
  texto:{
    textAlign: 'center',
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
})

export default estilos