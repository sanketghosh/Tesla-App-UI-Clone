import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem></CarItem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
