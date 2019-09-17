import React from "react";
import { Text, StyleSheet } from "react-native";

const Countdown = () => {
  const count = 3;

  return <Text style={styles.getStartedText}>{count}</Text>;
};

export default Countdown;

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 27,
    color: "#fff",
    textAlign: "center"
  }
});
