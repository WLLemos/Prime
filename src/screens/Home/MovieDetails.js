import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppNavigator from '../../components/movies/appnavigator';

export default function App() {
  return <AppNavigator />;
}
export const MovieDetails = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={movie.moviesURL} style={styles.movieImage} />

        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>Assistir Agora</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Baixar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.genre}>{movie.genre}</Text>
        <Text style={styles.rating}>⭐ {movie.rating}</Text>
        <Text style={styles.duration}>{movie.duration}</Text>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.castTitle}>Elenco:</Text>
        <Text style={styles.cast}>{movie.cast}</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#232f3e",
    
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 50
  },
  scrollContent: {
    alignItems: 'center',
  },
  movieImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain', 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  genre: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#f5c518',
    marginBottom: 5,
  },
  duration: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  castTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cast: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 20,
  },

  playButton: {
    backgroundColor: '#f5c518',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 15,
  },
  playButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  downloadButton: {
    backgroundColor: '#555',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 20,
  },
  downloadButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },


});