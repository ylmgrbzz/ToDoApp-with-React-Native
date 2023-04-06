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
  };

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
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={handleAddTask}>
            Add Task{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
