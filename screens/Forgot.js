import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/Forgot/Forgot';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {

  };
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
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Forgot;
