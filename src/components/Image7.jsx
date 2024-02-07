import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export const Image7 = () => {
  return (
    <View style={[globalStyles.layout, styles.layout]}>
      <View style={[globalStyles.container, styles.container]}>
        <View style={[globalStyles.box1, styles.box1]}></View>
        <View style={[globalStyles.box2, styles.box2]}></View>
        <View style={[globalStyles.box3, styles.box3]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 3 / 8,
  },

  box1: {
    flex: 1,
  },
  box2: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
});
