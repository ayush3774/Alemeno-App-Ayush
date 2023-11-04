// Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'acoyush3774@gmail.com' && password === '1234') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#171717"
    
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color:"white",
    top:-150
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor:"white",
    top:-150
  },
  loginButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    top:-150
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;

