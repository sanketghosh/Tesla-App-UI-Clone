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
    marginBottom: 15,
  },
  headerIcon: {
    color: "#e6e8e7",
  },
  headerText: {
    color: "#e6e8e7",
    fontWeight: "900",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    height: 26,
    width: 45,
    marginRight: 15,
  },
  batteryText: {
    color: "#e6e8e7",
    fontSize: 30,
    fontWeight: "700",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    color: "#e6e8e7",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 7,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
  },
  controlsButton: {
    borderWidth: 1.5,
    borderColor: "#e6e8e7",
    borderRadius: 50,
    padding: 15,
    marginLeft: 20,
  },
  controlButtonIcon: {
    color: "#e6e8e7",
  },
});

export default styles;
