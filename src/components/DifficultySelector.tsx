import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DifficultySelectorCard from "./DifficultySelectorCard";

/**
 * Props que recibe el componente DifficultySelector.
 * @param gameId - El identificador único del juego actual.
 * @param onSelectDifficulty - Función para manejar el nivel seleccionado.
 */
interface DifficultySelectorProps {
  gameId: string; // Identifica el juego actual.
  onSelectDifficulty: (difficulty: string) => void; // Callback al seleccionar una dificultad.
}

// Juegos que requieren selector de dificultad.
const gamesWithDifficulty = ["crossword", "wordsearch"]; // Identificadores de juegos aplicables.

// Lista de dificultades disponibles.
const difficulties = ["Fácil", "Intermedio", "Difícil"];

/**
 * Componente que renderiza un selector de dificultad solo para ciertos juegos.
 */
const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  gameId,
  onSelectDifficulty,
}) => {
  // Verifica si el juego actual permite selector de dificultad.
  const shouldShow = gamesWithDifficulty.includes(gameId);

  if (!shouldShow) return null; // Si no aplica, no renderiza nada.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un nivel de dificultad</Text>
      <FlatList
        data={difficulties} // Muestra la lista de dificultades.
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <DifficultySelectorCard
            difficulty={item} // Pasamos el nivel al card.
            onSelect={() => onSelectDifficulty(item)} // Maneja el evento al seleccionar.
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default DifficultySelector;