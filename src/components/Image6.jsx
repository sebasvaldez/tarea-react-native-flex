import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export const Image6 = () => {
  return (
    <View style={[globalStyles.layout, styles.layout]}>
      <View style={ styles.container}>
        <View style={[globalStyles.box1, styles.box1]}></View>
      </View>
      <View style={ styles.container2}>
        <View style={[globalStyles.box2, styles.box2]}></View>
      </View>
      <View style={ styles.container3}>
        <View style={[globalStyles.box3, styles.box3]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    
  },
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  container3: {
    flex: 2,
    backgroundColor: "#fff",
    flexDirection: "row",
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
