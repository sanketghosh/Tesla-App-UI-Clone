import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#191a19",
  },
  header: {
    marginTop: 45,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    color: "#e6e8e7",
  },
  headerText: {
    color: "#e6e8e7",
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
