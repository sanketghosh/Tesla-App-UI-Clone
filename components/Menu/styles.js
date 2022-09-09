import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuIcon: {
    color: "#e6e8e7",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  menuText: {
    color: "#e6e8e7",
    fontWeight: "900",
    fontSize: 16,
    marginLeft: 20,
    textTransform: "uppercase",
  },
  menuSubTitle: {
    color: "#ffffffa0",
    fontSize: 13,
    marginLeft: 20,
    fontWeight: "600",
  },
  menuChevronIcon: {
    color: "#ffffff8b",
  },
});

export default styles;
