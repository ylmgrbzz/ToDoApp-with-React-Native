import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { appStyles as styles } from "./styles";

export default function App() {
  const [text, setText] = useState();
  console.log(text);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const handleAddTask = () => {
    console.log("Added task");
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // const handleDeleteTask = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTasks(newTasks);
  // };

  // const renderItem = ({ item, index }) => (
  //   <View style={styles.taskItem}>
  //     <Text style={styles.taskText}>{item}</Text>
  //     <TouchableOpacity
  //       style={styles.deleteButton}
  //       onPress={() => handleDeleteTask(index)}
  //     >
  //       <Text style={styles.deleteText}>Delete</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>
          Enter your tasks in the text box below and press the Add button to add{" "}
        </Text>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="Enter your task here"
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={handleAddTask}>
            Add Task{" "}
          </Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item}</Text>
                <TouchableOpacity
                  style={styles.taskDelete}
                  onPress={() => handleDeleteTask(index)}
                >
                  <Text style={styles.taskDeleteText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item + Date.now() + Math.random()}
          />
          {/* {tasks.map((task) => (
            <Text>{task}</Text>
          ))} */}
        </View>
      </View>
    </SafeAreaView>
  );
}
