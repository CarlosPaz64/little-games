import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigation";

/**
 * Props que recibe la pantalla, tipadas desde el stack.
 */
type Props = NativeStackScreenProps<
AppStackParamList,
  "CrosswordDifficulty"
>;

/**
 * Pantalla que permite al usuario seleccionar un nivel de dificultad.
 */
const CrosswordDifficultyScreen: React.FC<Props> = ({ navigation }) => {
  // Lista de niveles de dificultad disponibles
  const difficulties = ["Fácil", "Intermedio", "Difícil"];

  /**
   * Navega a la pantalla de confirmación con la dificultad seleccionada.
   * @param difficulty - Nivel de dificultad elegido.
   */
  const handleDifficultySelect = (difficulty: string) => {
    navigation.navigate("SelectedDifficulty", {
      gameId: "crossword", // O el ID del juego actual
      difficulty,
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una Dificultad</Text> {/* Título */}
      {difficulties.map((difficulty) => (
        <TouchableOpacity
          key={difficulty}
          style={styles.button}
          onPress={() => handleDifficultySelect(difficulty)}
        >
          <Text style={styles.buttonText}>{difficulty}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CrosswordDifficultyScreen;
