import React, { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import styles from "./Styles/Styles";
import { Accelerometer } from "expo-sensors"; // installed expo sensors api - under the hood it has addlistener returns subscription
import Grid from "./Components/Grid";

export default function App() {
  const [accelerometerData, setAccelerometer] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  //slow and fast functions for the buttons
  const slow = () => Accelerometer.setUpdateInterval(1000);
  const fast = () => Accelerometer.setUpdateInterval(50);

  // Accelerometer returns a subscription and this gets mounted and unmounted
  useEffect(() => {
    const subscription = Accelerometer.addListener(setAccelerometer);
    return () => subscription.remove();
  }, []);

  // rendering the accelerometer values with the slow and fast buttons
  // added the error message if the accelerometer data is 0 means there is no accelerometer
  return (
    <View style={styles.container}>
      {accelerometerData.x !== 0 && accelerometerData.y !== 0 ? (
        <>
          <Text style={styles.headline}>Accelerometer data:</Text>
          <Text style={styles.text}>x: {accelerometerData.x}</Text>
          <Text style={styles.text}>y: {accelerometerData.y}</Text>
          <Text style={styles.text}>z: {accelerometerData.z}</Text>
          <Grid accelerometerData={accelerometerData} />
          <View style={styles.buttonContainer}>
            <Button title="slow" testID="Slow:Button" onPress={slow}></Button>
            <Button title="fast" testID="Fast:Button" onPress={fast}></Button>
          </View>
        </>
      ) : (
        <Text style={styles.errorText}>
          Accelerometer may not be supported on this device. No data available!
          :(
        </Text>
      )}
    </View>
  );
}
