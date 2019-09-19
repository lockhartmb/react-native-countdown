import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const Countdown = () => {
  const [endDate] = useState(moment("2030-01-01"));
  const [today] = useState(moment());
  const [difference, setDifference] = useState(endDate.diff(today, "seconds"));

  // const calculateRemainingTime = () => {
  //   const difference = endDate.diff(today, "seconds");
  //   return difference;
  // };

  useEffect(() => {
    setDifference(endDate.diff(today, "seconds"));
  }, [endDate, today]);

  const years = parseInt(difference / (60 * 60 * 24 * 365));
  const days = parseInt((difference / (60 * 60 * 24 * 365) - years) * 365);
  const hours = parseInt(
    ((difference / (60 * 60 * 24 * 365) - years) * 365 - days) * 24
  );
  const minutes = parseInt(
    (((difference / (60 * 60 * 24 * 365) - years) * 365 - days) * 24 - hours) *
      60
  );
  const seconds = parseInt(
    ((((difference / (60 * 60 * 24 * 365) - years) * 365 - days) * 24 - hours) *
      60 -
      minutes) *
      60
  );

  console.log(seconds);

  //   useEffect(() => {
  //     setDifference(endDate.diff(today, "seconds"));
  //   }, []);

  return (
    <View>
      <Text style={styles.getStartedText}>{years} years</Text>
      <Text style={styles.getStartedText}>{days} days</Text>
      <Text style={styles.getStartedText}>{hours} hours</Text>
      <Text style={styles.getStartedText}>{minutes} minutes</Text>
      <Text style={styles.getStartedText}>{seconds} seconds</Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 40,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
