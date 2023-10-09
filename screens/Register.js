import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Register({navigation}) {
  return (
    <View>
      <Text> Cadastrese</Text>
      <Button
      title="Login"
      onPress={ () => navigation.navigate('Login')}
      />
    </View>
  );
}
