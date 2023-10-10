import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {

  };

  return (
    <View >
      <Text >Esqueci a Senha</Text>
      <Text >Digite seu email para redefinir a senha:</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity  onPress={handleResetPassword}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Forgot;