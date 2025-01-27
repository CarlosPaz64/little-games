// Pantalla principal que muestra los minijuegos y el nivel de dificultad
import React, { useState } from "react"; // Importamos React y useState
import { StyleSheet, View, FlatList } from "react-native"; // Herramientas de diseño
import ScreenTitle from "../components/ScreenTitle"; // Componente para mostrar el título
import GameOption from "../components/GameOption"; // Componente para cada opción de juego
import DifficultySelector from "../components/DifficultySelector"; // Selector de dificultad
import GameList from "../data/GameList"; // Importamos la lista de juegos
import { handleGameSelect, handleDifficultySelect } from "../handlers/MainMenuHandlers"; // Importamos los manejadores
import { useNavigation } from "@react-navigation/native";

/**
 * Pantalla principal que muestra los juegos disponibles y el selector de dificultad.
 */
const MainMenuScreen: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null); // Estado del juego seleccionado
  const navigation = useNavigation<any>(); // Hook de navegacion

  return (
    <View style={styles.container}>
      {/* <ScreenTitle title="Menú Principal" /> */} {/*Título de la pantalla */}
      <FlatList
        data={GameList} // Usamos la lista importada de juegos
        keyExtractor={(item) => item.id} // Clave única para cada juego
        renderItem={({ item }) => (
          <GameOption
            name={item.name} // Nombre del juego
            description={item.description} // Descripción del juego
            onSelect={() => handleGameSelect(item.id, setSelectedGame, navigation)} // Callback al seleccionar un juego
          />
        )}
        contentContainerStyle={styles.list} // Estilo del contenedor
      />
      {/* Selector de dificultad, aparece solo si se selecciona un juego */}
      {selectedGame && (
        <DifficultySelector
          gameId={selectedGame} // Pasamos el juego seleccionado
          onSelectDifficulty={handleDifficultySelect} // Maneja la selección del nivel
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    padding: 20, // Espaciado interno
    backgroundColor: "#f9f9f9", // Fondo claro
  },
  list: {
    paddingBottom: 20, // Espaciado inferior
  },
});

export default MainMenuScreen;