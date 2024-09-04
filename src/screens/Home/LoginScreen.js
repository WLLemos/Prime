import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogin = () => {
    const registeredEmail = route.params?.registeredEmail;
    const registeredPassword = route.params?.registeredPassword;

    if (email === registeredEmail && password === registeredPassword) {
      navigation.navigate('Home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleSignup = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Não tem uma conta?
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.buttonTextCadastro}> Cadastrar</Text>
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
    width: '80%',
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
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#fff',
  },
  buttonTextCadastro: {
    color: '#f5c518',
    fontWeight: 'bold',
  },
});