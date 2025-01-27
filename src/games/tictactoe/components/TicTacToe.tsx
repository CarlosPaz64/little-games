import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RenderBoard from './RenderBoard';
import TicTacToeGame from '../handlers/GameController';

const TicTacToe = () => {
  const ticTacToeGame = useRef(new TicTacToeGame()).current;
  const [boardData, setBoardData] = useState<number[][]>(ticTacToeGame.getBoardData());
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1); // Jugador 1 comienza
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  const [winnerType, setWinnerType] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un ganador después de cada movimiento
    const winnerResult = ticTacToeGame.checkWinner();
    if (winnerResult) {
      setWinner(winnerResult.winner);
      setWinnerType(winnerResult.type);
      setGameOver(true); // El juego ha terminado
    }
  }, [boardData]); // Se ejecuta cada vez que se actualiza boardData

  const handlePress = (row: number, col: number) => {
    if (gameOver) return; // No permitir más jugadas si el juego ha terminado

    // Realizar el movimiento
    const validMove = ticTacToeGame.makeMove(row, col, currentPlayer);
    if (validMove) {
      setBoardData([...ticTacToeGame.getBoardData()]); // Actualizar el estado del tablero
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Cambiar de jugador
    }
  };

  const handleRemakeGame = () => {
    ticTacToeGame.remakeGame();
    setBoardData(ticTacToeGame.getBoardData());
    setCurrentPlayer(1); // Jugador 1 comienza
    setGameOver(false); // El juego no ha terminado
    setWinner(null); // No hay ganador
    setWinnerType(null); // Sin tipo de victoria
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <RenderBoard
          currentPlayer={currentPlayer}
          handlePress={handlePress}
          boardData={boardData}
        />
      </View>
      {gameOver && winner !== null && (
        <View style={styles.result}>
          <Text style={styles.winnerText}>
            ¡Jugador {winner} gana con {winnerType}!
          </Text>
          <Text style={styles.remakeText} onPress={handleRemakeGame}>
            Jugar de nuevo
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  remakeText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default TicTacToe;
