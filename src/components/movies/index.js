import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from "react-native"


export const Movies = ({ movieURL }) => {
  return (
    <View style={styles.container}>
      <Image source={movieURL} style={styles.movieImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,  
  },
  movieImage: {
    width: 120,  
    height: 180, 
    borderRadius: 8, 
  },
});