import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home( { navigation }) {
  return (
    <View>
      <Text> Login </Text>
      <Button
      title="Home"
      onPress={ () => navigation.navigate('Register')}
      />
    </View>
  );
}
