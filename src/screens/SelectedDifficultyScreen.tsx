import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigation";

/**
 * Props que recibe la pantalla, tipadas desde el stack.
 */
type Props = NativeStackScreenProps<
   AppStackParamList,
  "SelectedDifficulty"
>;

/**
 * Pantalla que muestra la dificultad seleccionada por el usuario.
 */
const SelectedDifficultyScreen: React.FC<Props> = ({ route, navigation }) => {
  const { difficulty } = route.params; // Obtenemos la dificultad de los parámetros

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Dificultad seleccionada: {difficulty}
      </Text> {/* Mensaje con la dificultad */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CrosswordDifficulty")} // Navegar a la pantalla de selección de dificultad
      >
        <Text style={styles.buttonText}>Seleccionar otra dificultad</Text>
      </TouchableOpacity>
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
  message: {
    fontSize: 18,
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

export default SelectedDifficultyScreen;
