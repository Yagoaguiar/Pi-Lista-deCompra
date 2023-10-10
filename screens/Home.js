import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/Home/Home';


const Home = () => {


  return (
    <View>
      <View>
        <TouchableOpacity>
          <AntDesign/>
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
              <AntDesign/>
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
