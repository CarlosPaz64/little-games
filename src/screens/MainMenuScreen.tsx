import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ScreenTitle from "../components/ScreenTitle";
import GameOption from "../components/GameOption";
import { AppStackParamList } from "../navigation/AppNavigation";
import GameList from "../data/GameList";
import { gamesWithDifficulty } from "../data/DifficultyData";

/**
 * Props que recibe la pantalla, tipadas desde el stack.
 */
type Props = NativeStackScreenProps<AppStackParamList, "MainMenu">;

/**
 * Pantalla principal que muestra los juegos disponibles.
 */
const MainMenuScreen: React.FC<Props> = ({ navigation }) => {
  /**
   * Maneja la selección de un juego.
   * @param gameId - ID del juego seleccionado.
   */
  const handleGameSelect = (gameId: string) => {
    console.log(`Juego seleccionado: ${gameId}`);
    if (gamesWithDifficulty.includes(gameId)) {
      // Navega a la pantalla de selección de dificultad
      navigation.navigate("CrosswordDifficulty");
    } else {
      // Navega directamente al juego seleccionado
      navigation.navigate("SelectedDifficulty", {
        gameId,
        difficulty: "N/A", // No aplica dificultad para este juego
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title="Menú Principal" />
      <FlatList
        data={GameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameOption
            name={item.name}
            description={item.description}
            onSelect={() => handleGameSelect(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  list: {
    paddingBottom: 20,
  },
});

export default MainMenuScreen;
