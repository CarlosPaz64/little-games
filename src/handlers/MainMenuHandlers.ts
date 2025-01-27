import { NavigationProp } from "@react-navigation/native";

/**
 * Maneja la selección de un juego.
 * @param gameId - ID del juego seleccionado.
 * @param setSelectedGame - Función para actualizar el estado del juego seleccionado.
 */
export const handleGameSelect = (
  gameId: string, 
  setSelectedGame: (gameId: string) => void, 
  navigation: NavigationProp<any> // Tipo de navegación
) => {
  console.log(`Juego seleccionado: ${gameId}`);
  setSelectedGame(gameId); // Actualiza el estado del juego seleccionado

  // Navegar a la pantalla correspondiente al juego
  switch (gameId) {
    case "tictactoe":
      navigation.navigate("TicTacToe"); // Navega a la pantalla de TicTacToe
      break;
    case "otroJuego":
      navigation.navigate("OtroJuego"); // Cambia por la pantalla correspondiente
      break;
    default:
      console.warn(`No hay una pantalla configurada para el juego con ID: ${gameId}`);
      break;
  }
};

/**
 * Maneja la selección de un nivel de dificultad.
 * @param difficulty - Nivel de dificultad seleccionado.
 */
export const handleDifficultySelect = (difficulty: string) => {
  console.log(`Nivel de dificultad seleccionado: ${difficulty}`);
  // Aquí podrías guardar el nivel seleccionado en un estado global o contexto
};
