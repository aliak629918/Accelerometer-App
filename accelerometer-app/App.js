import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
//import "./Styles/Styles.js";
import { Accelerometer } from "expo-sensors"; // installed expo sensors api - under the hood it has addlistener returns subscription

export default function App() {
  const [accelerometerData, setAccelerometer] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const slow = () => Accelerometer.setUpdateInterval(1000);
  const fast = () => Accelerometer.setUpdateInterval(50);

  useEffect(() => {
    const subscription = Accelerometer.addListener(setAccelerometer);
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      {accelerometerData.x !== 0 && accelerometerData.y !== 0 ? (
        <>
          <Text style={styles.text}>Accelerometer data:</Text>
          <Text style={styles.text}>x: {accelerometerData.x}</Text>
          <Text style={styles.text}>y: {accelerometerData.y}</Text>
          <Text style={styles.text}>z: {accelerometerData.z}</Text>
          <Grid accelerometerData={accelerometerData} />
        </>
      ) : (
        <Text style={styles.errorText}>No accelerometer data available</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Slow" onPress={slow}></Button>
        <Button title="Fast" onPress={fast}></Button>
      </View>
    </View>
  );
}

const Grid = ({ accelerometerData }) => {
  const GRID_SIZE = 100;
  const CIRCLE_SIZE = 20;

  const circlePosition = {
    left: ((accelerometerData.x + 1) * (GRID_SIZE - CIRCLE_SIZE)) / 2,
    top: ((1 - accelerometerData.y) * (GRID_SIZE - CIRCLE_SIZE)) / 2,
  };

  return (
    <View style={styles.gridContainer}>
      <View style={[styles.circle, circlePosition]} />
    </View>
  );
};

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
  text: {
    textAlign: "center",
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
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});
