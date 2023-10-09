import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Login/Login';

export default function TelaDeLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {

    console.log(`Email: ${email}, Senha: ${senha}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="white"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
