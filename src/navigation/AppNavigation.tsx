import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenuScreen from "../screens/MainMenuScreen";
import CrosswordDifficultyScreen from "../screens/CrosswordDifficultyScreen";
import SelectedDifficultyScreen from "../screens/SelectedDifficultyScreen";
import CrosswordScreen from "../games/crossword/screens/CrosswordScreen";
import { Difficulty } from "../games/crossword/types/Difficulties";

// Definimos los tipos de las rutas del stack
export type AppStackParamList = {
  MainMenu: undefined;
  CrosswordDifficulty: undefined;
  SelectedDifficulty: { gameId: string; difficulty: Difficulty };
  CrosswordGame: { gameId: string; difficulty: Difficulty }; // Nueva ruta para la vista del crucigrama
};

// Creamos el stack tipado
const Stack = createNativeStackNavigator<AppStackParamList>();

/**
 * Configuración de las rutas del módulo de crucigramas.
 */
const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{ title: "Menú Principal" }}
      />
      <Stack.Screen
        name="CrosswordDifficulty"
        component={CrosswordDifficultyScreen}
        options={{ title: "Seleccionar Dificultad" }}
      />
      <Stack.Screen
        name="SelectedDifficulty"
        component={SelectedDifficultyScreen}
        options={{ title: "Dificultad Seleccionada" }}
      />
      <Stack.Screen
        name="CrosswordGame"
        component={CrosswordScreen}
        options={{ title: "Crucigrama" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
