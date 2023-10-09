
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import styles from '../styles/Register/Register';

const Register = () => {
  const navigation = useNavigation({ navigation }); // Obtenha o objeto de navegação
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  


  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    // Simulação de registro de usuário (substitua pela lógica real)
    console.log('Email:', email);
    console.log('Senha:', password);

    // Limpe os campos de entrada após o registro bem-sucedido.
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage(null);


    navigation.navigate('Home'); // Substitua 'Home' pelo nome da sua tela "Home".
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Cadastrar-se</Text>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        onChangeText={(text) => setConfirmPassword(text)}
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
