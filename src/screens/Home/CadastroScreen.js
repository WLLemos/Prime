import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, insira um email válido.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Senha inválida', 'A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    if (email && password) {
      navigation.navigate('Login', { registeredEmail: email, registeredPassword: password });
    } else {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
    }
  };

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.loginPrompt}>
          Já tem uma conta?
          <TouchableOpacity onPress={handleLoginRedirect}>
            <Text style={styles.loginText}> Faça Login.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#f5c518',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginPrompt: {
    marginTop: 20,
    color: '#fff',
  },
  loginText: {
    color: '#f5c518',
    fontWeight: 'bold',
  },
});
