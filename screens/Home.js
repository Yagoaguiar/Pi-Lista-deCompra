import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



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
    <View>
      <View>
        <TouchableOpacity>
          <AntDesign />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="Digite sua tarefa"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>

      <View >
        <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        </TouchableOpacity>
        <Text>{item.text}</Text>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <AntDesign />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      >
        <AntDesign />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
