import { StyleSheet, View, Text, Pressable } from "react-native";

function GItems(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
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
