import React from "react";
import { View, StyleSheet, Text } from "react-native";

/**
 * Props para el componente CrosswordBoard.
 * @param board - Matriz 2D que representa el tablero del crucigrama.
 */
interface CrosswordBoardProps {
  board: string[][];
}

/**
 * Renderiza el tablero del crucigrama.
 */
const CrosswordBoard: React.FC<CrosswordBoardProps> = ({ board }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={styles.cell}>
              <Text style={styles.cellText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cellText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CrosswordBoard;
