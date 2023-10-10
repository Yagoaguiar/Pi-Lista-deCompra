
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from '../styles/Register/Register';

const Register = () => {
  const navigation = useNavigation({ navigation }); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  


  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }


    console.log('Email:', email);
    console.log('Senha:', password);


    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage(null);


    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Cadastrar-se</Text>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
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
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        onChangeText={(text) => setConfirmPassword(text)}
        placeholderTextColor="white"
        secureTextEntry
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
