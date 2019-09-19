import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [inputGoal, setInputGoal] = useState("");

  const goalInputHandler = inputText => {
    setInputGoal(inputText);
  };

  const addGoal = () => {
    props.onAddGoal(inputGoal);
    setInputGoal("");
  };

  const cancelGoal = () => {
    props.onCancel();
    setInputGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={inputGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addGoal} />
          <Button title="CANCEL" color="red" onPress={cancelGoal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default GoalInput;
