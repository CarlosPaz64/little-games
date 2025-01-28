import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenuScreen from "../screens/MainMenuScreen";
import CrosswordDifficultyScreen from "../screens/CrosswordDifficultyScreen";
import SelectedDifficultyScreen from "../screens/SelectedDifficultyScreen";

// Definimos los tipos de las rutas del stack
export type AppStackParamList = {
  MainMenu: undefined;
  CrosswordDifficulty: undefined;
  SelectedDifficulty: { gameId: string; difficulty: string };
};

// Creamos el stack tipado
const Stack = createNativeStackNavigator<AppStackParamList>();

/**
 * Configuración de las rutas del módulo de crucigramas.
 */
const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      {/* Pantalla principal del menú */}
      <Stack.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{ title: "Menú Principal" }}
      />
      {/* Pantalla de selección de dificultad */}
      <Stack.Screen
        name="CrosswordDifficulty"
        component={CrosswordDifficultyScreen}
        options={{ title: "Seleccionar Dificultad" }}
      />
      {/* Pantalla de confirmación de dificultad */}
      <Stack.Screen
        name="SelectedDifficulty"
        component={SelectedDifficultyScreen}
        options={{ title: "Dificultad Seleccionada" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
