import React from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, setTask] = React.useState();
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (!task) return; // Prevent adding empty tasks
    Keyboard.dismiss();
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  }

  const toggleComplete = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTasks(itemsCopy);
  };

  return (
    <View style={styles.container}>

      {/* Tasks Header */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            tasks.map((item, index) => {
              return (
                <Task
                  key={index}
                  text={item.text}
                  completed={item.completed}
                  onToggleComplete={() => toggleComplete(index)}
                  onDelete={() => deleteTask(index)}
                />
              );
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#403d39',
    borderRadius: 60,
    color: '#fffcf2',
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#403d39',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    color: '#fffcf2',
    fontSize: 18,
    justifyContent: 'center',
  },
});
