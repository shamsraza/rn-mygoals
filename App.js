import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText,id:Math.random().toString}]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals here"
          style={styles.textInputStyle}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalContainer}>
        {/*  <ScrollView>
        {courseGoals.map((goal) =>(
          <View key={goal}>
        <Text style={styles.goalItem}>{goal}</Text>
        </View>
        ))}
      </ScrollView> */}
        //same thing can be achieved using Flatlist
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return(
            <View>
              <Text style={styles.goalItem}>{itemData.item.text}</Text>
            </View>);
          }}
          keyExtractor={(item,index) => {
            return item.id
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#0d031b",
    color: "white",
  },
});
