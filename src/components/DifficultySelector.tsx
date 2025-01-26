import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DifficultyModal from "./DifficultySelectorModal";
import { gamesWithDifficulty, difficulties } from "../data/DifficultyData";

/**
 * Props para el componente DifficultySelector.
 * @param gameId - El identificador del juego actual.
 * @param onSelectDifficulty - Callback al seleccionar un nivel de dificultad.
 */
interface DifficultySelectorProps {
  gameId: string;
  onSelectDifficulty: (difficulty: string) => void;
}

/**
 * Componente que controla el modal del selector de dificultad.
 */
const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  gameId,
  onSelectDifficulty,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  console.log("gameId recibido:", gameId);
  console.log(
    "¿Debe mostrar selector?",
    gamesWithDifficulty.includes(gameId)
  );

  // Si el juego no requiere selector de dificultad, no renderizamos nada.
  if (!gamesWithDifficulty.includes(gameId)) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          console.log("Abriendo modal...");
          setModalVisible(true); // Cambia el estado del modal
        }}
      >
        <Text style={styles.openButtonText}>Seleccionar Dificultad</Text>
      </TouchableOpacity>
      <DifficultyModal
        visible={isModalVisible}
        onClose={() => {
          console.log("Cerrando modal...");
          setModalVisible(false); // Cambia el estado al cerrar
        }}
        difficulties={difficulties}
        onSelect={(difficulty) => {
          console.log("Dificultad seleccionada:", difficulty);
          onSelectDifficulty(difficulty);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
  openButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DifficultySelector;
