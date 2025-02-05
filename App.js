import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculadoraNutricion from './CalculadoraNutricion';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculadoraNutricion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
