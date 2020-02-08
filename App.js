import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

// Scroll view can put any where that want to be scrollable
// If it too long its wlll render all of the rest even not display => using FlatList to solve this prob
// FlatList is taking only object(require key) not support Array of String
// in 2019 Flatlist can be use id instead of key

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goaling"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
            <GoalItem title={itemData.item.value}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {

    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  
});
