import { StyleSheet, View, Text } from "react-native";

function GItems(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </View>
  );
}

export default GItems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#0d031b",
    color: "white",
  },
});
