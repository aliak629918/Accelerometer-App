import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";
import { Button } from "react-native";

describe("Error message", () => {
  it("if there is no accelerometer detected, it should return with the appropriate error message", () => {
    const { getByText } = render(<App />);
    expect(
      getByText(
        "Accelerometer may not be supported on this device. No data available! :("
      )
    ).toBeTruthy();
  });
});

// i think mocking is to be used here > jest.fn();
describe("Checking if my slow and fast buttons work", () => {
  it("calls onPress function when the slow button is pressed", () => {
    const { getByText } = render(<App />);
    const slowButton = getByText("slow");
    fireEvent.press(slowButton);

    expect(slowButton).toHaveBeenCalled();
  });
});
