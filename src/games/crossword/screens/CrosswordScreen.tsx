import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../navigation/AppNavigation";
import { fetchWords } from "../services/FetchWords";
import { fetchDefinitions } from "../services/FetchDefinitions";
import { generateBoard } from "../services/GenerateBoard";
import CrosswordBoard from "../components/CrosswordBoard";

/**
 * Props que recibe la pantalla, tipadas desde el stack.
 */
type Props = NativeStackScreenProps<AppStackParamList, "CrosswordGame">;

/**
 * Pantalla que renderiza el crucigrama basado en la dificultad seleccionada.
 */
const CrosswordScreen: React.FC<Props> = ({ route }) => {
  const { difficulty } = route.params; // Obtenemos la dificultad seleccionada
  const [board, setBoard] = useState<string[][] | null>(null); // Estado del tablero
  const [clues, setClues] = useState<{ direction: string; clue: string }[]>([]); // Estado de las pistas

  useEffect(() => {
    const loadGameData = async () => {
      try {
        console.log("Cargando palabras...");
        const words = await fetchWords(difficulty);
        console.log("Palabras obtenidas:", words);
  
        console.log("Cargando definiciones...");
        const wordsWithClues = await fetchDefinitions(words);
        console.log("Palabras con definiciones:", wordsWithClues);
  
        console.log("Generando tablero...");
        const { board: generatedBoard, clues: generatedClues } =
          generateBoard(wordsWithClues);
  
        console.log("Tablero generado:", generatedBoard);
        console.log("Pistas generadas:", generatedClues);
  
        setBoard(generatedBoard);
        setClues(generatedClues);
      } catch (error) {
        console.error("Error al cargar el crucigrama:", error);
      }
    };
  
    loadGameData();
  }, [difficulty]);  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crucigrama - {difficulty}</Text>
      {board && <CrosswordBoard board={board} />}
      {clues && (
        <FlatList
          data={clues}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.clue}>
              {item.direction}: {item.clue}
            </Text>
          )}
          contentContainerStyle={styles.cluesContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cluesContainer: {
    marginTop: 20,
  },
  clue: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CrosswordScreen;
