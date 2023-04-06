import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { appStyles as styles } from "./styles";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>My Tasks</Text>
        <Text>
          Enter your tasks in the text box below and press the Add button to add{" "}
        </Text>
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}
