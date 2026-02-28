import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
function GInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
    props.onGoalAdd(enteredGoalText);
    setEnteredGoalText("")
  }
  return(
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Goals here"
      style={styles.textInputStyle}
      onChangeText={goalInputHandler}
    />
    <Button title="Add Goal" onPress={addGoalHandler}></Button>
  </View>
  );
}

export default GInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row", //default is column
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
