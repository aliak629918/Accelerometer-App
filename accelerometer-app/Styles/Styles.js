import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  gridContainer: {
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    position: "relative",
    alignSelf: "center",
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "pink",
    position: "absolute",
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  text: {
    textAlign: "center",
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
    alignSelf: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
});

export default styles;
