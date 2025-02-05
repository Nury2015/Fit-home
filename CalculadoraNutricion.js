import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CalculadoraNutricion() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [objetivo, setObjetivo] = useState("Mantenimiento");
  const [actividad, setActividad] = useState("Sedentario");
  const [calorias, setCalorias] = useState(null);
  const [proteina, setProteina] = useState(null);

  const calcular = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const edadNum = parseInt(edad);

    if (!pesoNum || !alturaNum || !edadNum) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    let factorActividad = 1.2;
    if (actividad === "Ligero") factorActividad = 1.375;
    if (actividad === "Moderado") factorActividad = 1.55;
    if (actividad === "Activo") factorActividad = 1.725;
    if (actividad === "Muy Activo") factorActividad = 1.9;

    let caloriasCalculadas = 10 * pesoNum + 6.25 * alturaNum - 5 * edadNum + 5;
    caloriasCalculadas *= factorActividad;

    let proteinaCalculada = pesoNum * (objetivo === "Aumento" ? 2.0 : 1.6);

    setCalorias(caloriasCalculadas.toFixed(2));
    setProteina(proteinaCalculada.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Nutricional</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />

      <Text style={styles.label}>Objetivo:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={objetivo}
          onValueChange={(itemValue) => setObjetivo(itemValue)}
          style={{ height: 50, width: 250 }} // Ajusta el tamaño si es necesario
          mode="dropdown" // Cambia a "dialog" si sigue sin funcionar
        >
          <Picker.Item label="Mantenimiento" value="Mantenimiento" />
          <Picker.Item label="Aumento" value="Aumento" />
          <Picker.Item label="Pérdida" value="Pérdida" />
        </Picker>
      </View>

      <Text style={styles.label}>Nivel de actividad:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={actividad}
          onValueChange={(itemValue) => setActividad(itemValue)}
          style={styles.picker}
          mode="dropdown"
        >
          <Picker.Item label="Selecciona tu actividad..." value="" />
          <Picker.Item label="Sedentario" value="Sedentario" />
          <Picker.Item label="Ligero" value="Ligero" />
          <Picker.Item label="Moderado" value="Moderado" />
          <Picker.Item label="Activo" value="Activo" />
          <Picker.Item label="Muy Activo" value="Muy Activo" />
        </Picker>
      </View>

      <Button title="Calcular" onPress={calcular} />

      {calorias && proteina && (
        <View style={styles.resultados}>
          <Text style={styles.resultadoText}>
            Necesitas {calorias} calorías al día.
          </Text>
          <Text style={styles.resultadoText}>
            Necesitas {proteina} gramos de proteína al día.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  pickerContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
    // overflow: "hidden", // IMPORTANTE para que se vea bien en Android
  },
  picker: {
    width: 250,
  },
  resultados: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    alignItems: "center",
  },
  resultadoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
