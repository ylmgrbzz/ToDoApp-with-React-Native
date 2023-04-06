import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginTop: 8,
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: "lightblue",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  taskContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "#ddd",
    justifyContent: "space-between",
    padding: 16,
  },
  taskText: {
    fontSize: 18,
  },
  taskDelete: {
    backgroundColor: "red",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  taskDeleteText: {},
});
