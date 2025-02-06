import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalculadoraNutricion from "./CalculadoraNutricion";
import ResultadosScreen from "./ResultadosScreen";
import BuscarAlimentos from "./BuscarAlimentos";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculadora">
        <Stack.Screen
          name="Calculadora"
          component={CalculadoraNutricion}
          options={{ title: "Calculadora Nutricional" }}
        />
        <Stack.Screen
          name="Resultados"
          component={ResultadosScreen}
          options={{ title: "Resultados" }}
        />
        <Stack.Screen
          name="BuscarAlimentos"
          component={BuscarAlimentos}
          options={{ title: "Buscar Alimentos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}