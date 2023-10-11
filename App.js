import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/home';
import Forgot from './screens/Forgot';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //deixar como true para conseguir ter acesso ao professor

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ title: 'Lista de compra',  headerTitleAlign: 'center'  }} />
          <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil',  headerTitleAlign: 'center'  }} />
          
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}  initialParams={{ handleLogin }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Cadastre-se' }} />
          <Stack.Screen name="Forgot" component={Forgot} options={{ title: 'Esqueci senha' }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Tarefa' }} />
           <Stack.Screen name="Profile" component={Profile} options={{ title: 'Meu pe' }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
