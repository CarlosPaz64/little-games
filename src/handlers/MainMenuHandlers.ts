/**
 * Maneja la selección de un juego.
 * @param gameId - ID del juego seleccionado.
 * @param setSelectedGame - Función para actualizar el estado del juego seleccionado.
 */
export const handleGameSelect = (gameId: string, setSelectedGame: (gameId: string) => void) => {
    console.log(`Juego seleccionado: ${gameId}`);
    setSelectedGame(gameId); // Actualiza el estado del juego seleccionado
  };
  
  /**
   * Maneja la selección de un nivel de dificultad.
   * @param difficulty - Nivel de dificultad seleccionado.
   */
  export const handleDifficultySelect = (difficulty: string) => {
    console.log(`Nivel de dificultad seleccionado: ${difficulty}`);
    // Aquí podrías guardar el nivel seleccionado en un estado global o contexto
  };
  