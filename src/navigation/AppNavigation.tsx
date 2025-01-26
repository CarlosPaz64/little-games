import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenuScreen from "../screens/MainMenuScreen"; // Pantalla principal del menú

const Stack = createNativeStackNavigator(); // Creamos el stack de navegación

/**
 * Configuración del stack de navegación para la aplicación.
 */
const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      {/* Pantalla principal del menú */}
      <Stack.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{ title: "Menú Principal" }} // Personalización del encabezado
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; // Exportamos para usar en App.tsx