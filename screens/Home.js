import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/Home/Home'; 


const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['Mercado', 'Feira', 'Outros'];

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, category: categories[categoryIndex], completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === taskId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const changeCategory = (direction) => {
    if (direction === 'next') {
      setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    } else if (direction === 'prev') {
      setCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    }
  };

  return (
        <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeCategory('prev')}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.categoryText}>{categories[categoryIndex]}</Text>
        <TouchableOpacity onPress={() => changeCategory('next')}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua tarefa"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
      <FlatList
        style={styles.taskList}
        data={tasks.filter((item) => item.category === categories[categoryIndex])}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <View style={[styles.checkbox, item.completed ? styles.completedCheckbox : styles.incompleteCheckbox]}>
                {item.completed && <AntDesign name="checksquare" size={20} color="green" />}
                {!item.completed && <AntDesign name="checksquareo" size={20} color="black" />}
              </View>
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed ? styles.completedTaskText : null]}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.addButton, { position: 'absolute', bottom: 10, right: 10 }]}
        onPress={addTask}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
