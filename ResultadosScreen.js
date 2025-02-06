import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ResultadosScreen = ({ route, navigation }) => {
  // Recibe los parámetros de navegación
  const { calorias, proteina, grasas, carbohidratos } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <View style={styles.resultadosContainer}>
      <View style={styles.resultados}>
        <Text style={styles.resultadoText}>
          Necesitas consumir al día {calorias} calorías.
        </Text>
        <Text style={styles.resultadoText}>
          {proteina} gramos de proteína.
        </Text>
        <Text style={styles.resultadoText}>
          {grasas} gramos de grasas saludables.
        </Text>
        <Text style={styles.resultadoText}>
          {carbohidratos} gramos de carbohidratos.
        </Text>

        <Text style={styles.resultadoText}>
          ¡No te preocupes! 
        </Text>

        <Text style={styles.resultadoText}>
         Te ayudaremos a crear tus comidas personalizadas
        </Text>

      </View>
      </View>

      {/* Contenedor para los botones */}
      <View style={styles.buttonContainer}>
        {/* Envuelve cada botón en un View para aplicar estilos */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Volver a la Calculadora"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Buscar Alimentos"
            onPress={() => navigation.navigate("BuscarAlimentos")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },

  resultadosContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10, // Bordes redondeados
    padding: 20, // Espacio interno
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Dirección de la sombra
    shadowOpacity: 0.2, // Transparencia de la sombra
    shadowRadius: 4, // Desenfoque de la sombra
    elevation: 5, // Sombra en Android
  },
  resultados: {
    marginBottom: 30,
    alignItems: "center",
  },
  resultadoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5682f3",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "80%", // Ancho del contenedor de botones
    paddingTop: 50,
  },
  buttonWrapper: {
    marginBottom: 30, // Espacio entre los botones
  },
});

export default ResultadosScreen;