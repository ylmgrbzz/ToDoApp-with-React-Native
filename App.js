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
          placeholder="Enter your task here"
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add Task </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
