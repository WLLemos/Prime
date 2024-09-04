import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESPOPULAR } from '../../utils/moviePopular';
import { MOVIESRECOMMENDED } from '../../utils/moviesRecommended';
import { MOVIESROMANTIC } from '../../utils/moviesRomantic';
import { MOVIESCAROUSEL } from '../../utils/moviesCarousel';
import Swiper from 'react-native-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen'; 
import { DownloadsScreen } from './DownloadScreen';
import { SearchScreen } from './SearchScreen';
import { Ionicons } from '@expo/vector-icons'; 
import AppNavigator from '../../components/movies/appnavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return <AppNavigator />;
}

const CarouselComponent = ({ movies }) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      autoplay={true}
      autoplayTimeout={7}>
      {movies.map((movie, index) => (
        <View style={styles.slide} key={index}>
          <Image source={movie.moviesURL} style={styles.carouselImage} />
        </View>
      ))}
    </Swiper>
  );
};

export const Home = () => {
  const navigation = useNavigation();

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item)}>
      <Image source={item.moviesURL} style={styles.movieImage} />
    </TouchableOpacity>
  );

  const renderMovieVertical = ({ item }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item)}>
      <Image source={item.moviesURL} style={styles.movieImageVert} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.teste}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Infantil</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentMovies}>
        <CarouselComponent movies={MOVIESCAROUSEL} />

        <Text style={styles.titleMovie}>Continuar Assistindo</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={renderMovie}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.titleMovie}>Recomendados</Text>
        <FlatList
          data={MOVIESRECOMMENDED}
          keyExtractor={(item) => item.id}
          renderItem={renderMovie}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.titleMovie}>Filmes Populares</Text>
        <FlatList
          data={MOVIESPOPULAR}
          keyExtractor={(item) => item.id}
          renderItem={renderMovieVertical}
          horizontal
          contentContainerStyle={styles.contentListVert}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.titleMovie}>Filmes Românticos</Text>
        <FlatList
          data={MOVIESROMANTIC}
          keyExtractor={(item) => item.id}
          renderItem={renderMovie}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232f3e',
    alignItems: 'flex-start',
  },
  header: {
    width: '10%',
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  primeLogoImg: {
    alignSelf: 'flex',
    width: 120, 
    height: 20, 
    marginLeft: 5,
  },
  amazonLogoImg: {
    width: 50, 
    height: 20, 
    marginLeft: 10,
  },
  teste: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  
  movieImage: {
    width: 250,
    height: 140,
    marginRight: 10,
    borderRadius: 8,
  },

  movieImageVert: {
    width: 250,
    height: 320,
    marginRight: 10,
    borderRadius: 8,
    
  },

  contentMovies: {
    width: '100%',
  },
 
  titleMovie: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 15,
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },
  contentListVert: {
    paddingLeft: 18,
    paddingRight: 30,
    height: 320,
  },

  wrapper: {
    height: 500,
    
  },
  slide: {
    alignItems: 'center', 
    backgroundColor: '#232f3e', 
  },

  carouselImage: {
    width: '80%',
    height: 500,
    borderRadius: 10,
    opacity: 0.7,
  },
});
