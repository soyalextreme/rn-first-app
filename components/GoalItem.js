import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { create } from "uuid-js";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onLongPress={props.onDelete.bind(this, props.id)}
    >
      <View>
        <Text style={styles.textGoals}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textGoals: {
    marginTop: "10%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    textAlign: "center",
    backgroundColor: "#bababa",
    opacity: 0.4
  }
});

export default GoalItem;
