 import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MovieDetails } from './src/screens/Home/MovieDetails.js';
import LoginScreen from './src/screens/Home/LoginScreen';
import CadastroScreen from './src/screens/Home/CadastroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
