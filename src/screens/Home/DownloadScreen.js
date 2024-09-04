import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DownloadsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Downloads Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});