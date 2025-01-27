// Pantalla principal que muestra los minijuegos y el nivel de dificultad
import React, { useState } from "react"; // Importamos React y useState
import { StyleSheet, View, FlatList } from "react-native"; // Herramientas de diseño
import TicTacToe from "../games/tictactoe/components/TicTacToe";

const TicTacToeScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <TicTacToe/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    padding: 20, // Espaciado interno
    backgroundColor: "#f9f9f9", // Fondo claro
  },
});

export default TicTacToeScreen;