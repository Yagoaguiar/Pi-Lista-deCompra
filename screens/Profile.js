import React from 'react';
import { View, Text, Button } from 'react-native';
import { Avatar } from 'react-native-paper';

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar.Text
        label="U"
        size={100}
      />
      <Text>Usuário</Text>
      <Button
        title="Sair"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Profile;
