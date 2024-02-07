import { View, StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export const Image2 = () => {
  return (
    <View style={[globalStyles.layout, styles.layout]}>
      <View style={[globalStyles.container, styles.container]}>
        <View style={[globalStyles.box1, styles.box1]}></View>
        <View style={[globalStyles.box2, styles.box2]}></View>
      </View>

      <View style={styles.container2}>
        <View style={[globalStyles.box3, styles.box3]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 2 / 8,

    justifyContent: "center",
  },
  container2: {
    flex: 1 / 8,
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  box1: {
    flex: 1,
  },
  box2: {
    flex: 1,
  },
  box3: {
    flex: 8,
  },
});
