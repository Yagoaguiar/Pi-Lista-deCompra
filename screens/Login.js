import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Login/Login';
import Home from './home';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (validateFields()) {
      console.log(`Email: ${email}, Senha: ${senha}`);
      
      navigation.navigate('Home');
    }
  };

  const validateFields = () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        keyboardType="email-address"
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

      <TouchableOpacity style={styles.signUpButton} onPress={handleForgot}>
        <Text style={styles.forgotButtonText}>Esqueci senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Novo aqui, cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
