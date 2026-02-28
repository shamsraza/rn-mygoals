import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GItems from "./components/GItems";
import GInput from "./components/GInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id!==id);
    })
    console.log("DELETE");
  }

  return (
    <View style={styles.appContainer}>
      <GInput onGoalAdd={addGoalHandler} />
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
            return (
              <GItems
                text={itemData.item.text}
                id = {itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
  goalContainer: {
    flex: 4,
  },
});
