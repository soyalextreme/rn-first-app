import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setEnteredGoal("");
    setAddMode(false);
  };

  const closeAddGoalHandler = () => {
    setAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Set a goal"
          style={styles.textInput}
          value={enteredGoal}
        />
        <Button title="+" onPress={addGoalHandler} />
      </View> */}
      <Button
        title="Add New Goal"
        onPress={() => {
          setAddMode(true);
        }}
      />
      <GoalInput
        visible={addMode}
        goalInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
        close={closeAddGoalHandler}
      />

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%"
  }
});
