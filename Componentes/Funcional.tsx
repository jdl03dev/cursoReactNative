import React from "react";
import {View, Text, TouchableOpacity} from "react-native-reanimated";
import estilos from "./Style";
import {Tareas} from "./Tareas"

interface ItemProps{
    item: Tareas
    markdone: ()=>void
    deleteF:()=>void
}