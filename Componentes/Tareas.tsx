import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
// Usa emojis como casilla de verificación por simplicidad
import { SafeAreaView } from "react-native-safe-area-context";

// Tipo de tarea
interface Task {
  id: string;
  titulo: string;
  done: boolean;
  date: Date;
}

export default function Tareas() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', titulo: 'Estudiar', done: false, date: new Date() },
    { id: '2', titulo: 'Jugar', done: false, date: new Date() },
    { id: '3', titulo: 'Caminar', done: true, date: new Date() }
  ]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      titulo: input,
      done: false,
      date: new Date()
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleDone = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleDone(item.id)}>
        <Text style={styles.check}>{item.done ? "✅" : "⬜"}</Text>
      </TouchableOpacity>
      <Text style={[styles.taskText, item.done && styles.taskDone]}>
        {item.titulo}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Image source={require('../img/trash.png')} style={styles.iconAddbtn}/>
        
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.contTareas}>
      <Text style={styles.tituloTareas}>Tareas</Text>

      <View style={styles.imageContainer}>
        <Image source={require('../img/list.png')} style={styles.image} />
      </View>

      <View style={styles.inputConTar}>
        <TextInput
          placeholder="Escribe una tarea"
          value={input}
          onChangeText={setInput}
          style={styles.inputTar}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Image source={require('../img/addTask_icon.png')} style={styles.iconAddbtn} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.taskList}
      />
    </SafeAreaView>
  );
}

// Estilos básicos corregidos
const styles = StyleSheet.create({
  contTareas: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 16,
    
  },
  tituloTareas: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    color: "#333"
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  inputConTar: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center"
  },
  inputTar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  },
  addButton: {
    padding: 2,
    borderRadius: 8
  },
  iconAddbtn: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  taskList: {
    paddingBottom: 50
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 8,
    borderRadius: 8
  },
  taskText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#aaa"
  },
  check: {
    fontSize: 20
  },
  delete: {
    fontSize: 18,
    marginLeft: 10
  }
});
