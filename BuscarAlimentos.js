import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BuscarAlimentos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Alimentos</Text>
      <Button
        title="Volver a la Calculadora"
        onPress={() => navigation.goBack()} // Navega de regreso a la pantalla anterior
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BuscarAlimentos;