import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Navegación principal
import AppNavigator from "./src/navigation/AppNavigation"; // Configuración de rutas

/**
 * Punto de entrada principal de la aplicación.
 */
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator /> {/* Cargamos las rutas desde AppNavigator */}
    </NavigationContainer>
  );
}
