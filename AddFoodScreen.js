import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ref, push } from 'firebase/database';
import { database } from './firebaseConfig';

// base de datos de alimentos donde los usuarios puedan buscar y ver la información nutricional de cada alimento.

const AddFoodScreen = () => {
  const [nombre, setNombre] = useState('');
  const [calorias, setCalorias] = useState('');
  const [proteinas, setProteinas] = useState('');
  const [grasas, setGrasas] = useState('');
  const [carbohidratos, setCarbohidratos] = useState('');

  const addFood = () => {
    const foodData = {
      nombre,
      calorias: parseFloat(calorias),
      proteinas: parseFloat(proteinas),
      grasas: parseFloat(grasas),
      carbohidratos: parseFloat(carbohidratos),
    };

    push(ref(database, 'alimentos'), foodData)
      .then(() => {
        alert('Alimento agregado correctamente');
        setNombre('');
        setCalorias('');
        setProteinas('');
        setGrasas('');
        setCarbohidratos('');
      })
      .catch((error) => alert('Error al agregar alimento: ' + error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Alimento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Calorías (por 100g)"
        keyboardType="numeric"
        value={calorias}
        onChangeText={setCalorias}
      />
      <TextInput
        style={styles.input}
        placeholder="Proteínas (por 100g)"
        keyboardType="numeric"
        value={proteinas}
        onChangeText={setProteinas}
      />
      <TextInput
        style={styles.input}
        placeholder="Grasas (por 100g)"
        keyboardType="numeric"
        value={grasas}
        onChangeText={setGrasas}
      />
      <TextInput
        style={styles.input}
        placeholder="Carbohidratos (por 100g)"
        keyboardType="numeric"
        value={carbohidratos}
        onChangeText={setCarbohidratos}
      />
      <Button title="Agregar" onPress={addFood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddFoodScreen;