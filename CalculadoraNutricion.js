import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora Nutricional</Text>

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text style={styles.label}>Objetivo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={objetivo}
            onValueChange={(itemValue) => setObjetivo(itemValue)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="Mantenimiento del peso" value="Mantenimiento" />
            <Picker.Item label="Aumento de masa muscular" value="Aumento" />
            <Picker.Item label="Pérdida de peso" value="Pérdida" />
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
              Necesitas consumir al día {calorias} calorías 
            </Text>
            <Text style={styles.resultadoText}>
              y {proteina} gramos de proteína.
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    marginVertical: 20,
    paddingLeft: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 5,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    alignSelf: "flex-start",
     // Cambiar de "right" a "flex-start" para alinear a la izquierda
  },
  
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
  resultados: {
    alignItems: "center",
    marginTop:30,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  resultadoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5682f3", 
  },
});
