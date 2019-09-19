import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = props => {
  const [inputGoal, setInputGoal] = useState("");

  const goalInputHandler = inputText => {
    setInputGoal(inputText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={inputGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, inputGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default GoalInput;
