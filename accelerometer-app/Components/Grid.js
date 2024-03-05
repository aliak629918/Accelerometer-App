import { View } from "react-native";
import styles from "../Styles/Styles";

const Grid = ({ accelerometerData }) => {
  //initialised the grid and cicle size
  const GRID_SIZE = 100;
  const CIRCLE_SIZE = 20;

  const circlePosition = {
    // +1 to the x axis to make it positive value, -1 from the y axis inverts value
    // GRID - CIRCLE space for the circle to move /2 for the circle to be centered in the middle
    left: ((accelerometerData.x + 1) * (GRID_SIZE - CIRCLE_SIZE)) / 2,
    top: ((1 - accelerometerData.y) * (GRID_SIZE - CIRCLE_SIZE)) / 2,
  };
  // render grid and circle to view
  return (
    <View style={styles.gridContainer}>
      <View style={[styles.circle, circlePosition]} />
    </View>
  );
};

export default Grid;
