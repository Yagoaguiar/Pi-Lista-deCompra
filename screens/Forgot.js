import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import styles from '../styles/Forgot/Forgot';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation({ navigation }); // Obtenha a referência à navegação


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci a Senha</Text>
      <Text style={styles.description}>Digite seu email para redefinir a senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Enviar email</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Forgot;
