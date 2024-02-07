import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";
export const Image9 = () => {
  return (
    <View style={[globalStyles.layout, styles.layout]}>
      <View style={[globalStyles.container, styles.container]}>
        <View style={[globalStyles.box1, styles.box1]}></View>
      </View>
      <View style={[globalStyles.container, styles.container]}>
        <View style={[globalStyles.box2, styles.box2]}></View>
      </View>

      <View style={[globalStyles.container, styles.container, styles.bottom]}>
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
    flexDirection: "row",
  },
  container: {
    flex: 1 / 4,
    height: 100,
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
  bottom: {
    top: 100,
    left: -196,
  },
});
