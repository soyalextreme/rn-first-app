import React from "react";
import { TextInput, View, Button, StyleSheet, Modal, Text } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.btnClose}>
          <Button title="x" onPress={props.close} color="#03926F" />
        </View>
        <Text>lets add a goal!</Text>
        <TextInput
          onChangeText={props.goalInputHandler}
          placeholder="Set a goal"
          style={styles.textInput}
          value={props.enteredGoal}
        />
        <View style={styles.btnAdd}>
          <Button title="+" onPress={props.addGoalHandler} color="#54FFD5" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textInput: {
    borderBottomColor: "#026D53",
    borderWidth: 4,
    padding: 10,
    marginVertical: 20,
    width: "80%"
  },
  btnClose: {
    flexDirection: "row",
    marginLeft: 250,
    marginBottom: 200
  },
  btnAdd: {
    scaleX: 2,
    scaleY: 2,
    marginTop: 100,
    marginBottom: 200
  }
});

export default GoalInput;
