import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = inputGoal => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      {
        key: Math.random().toString(),
        value: inputGoal
      }
    ]);
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(courseGoals => {
      //filter will go through each item in list
      //for each item, we say true if we want to keep the element in the list,
      //and false if we want to not keep (i.e. delete) this elemant from the list
      return courseGoals.filter(goal => goal.key !== goalKey);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={removeGoalHandler.bind(this, itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
