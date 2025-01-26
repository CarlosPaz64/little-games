import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * Props que recibe el componente DifficultyCard.
 * @param difficulty - El nombre del nivel de dificultad (Fácil, Intermedio, Difícil).
 * @param onSelect - Función que se ejecuta al seleccionar el nivel.
 */
interface DifficultySelectorCardProps {
  difficulty: string; // Nombre del nivel de dificultad.
  onSelect: () => void; // Callback para manejar la selección.
}

/**
 * Componente que renderiza una tarjeta para cada nivel de dificultad.
 */
const DifficultySelectorCard: React.FC<DifficultySelectorCardProps> = ({ difficulty, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text style={styles.text}>{difficulty}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DifficultySelectorCard;
