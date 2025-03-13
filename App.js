import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Tasks Header */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Task 1'}/>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ede2',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
