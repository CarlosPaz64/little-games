import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, InteractionManager } from 'react-native';
import TicTacToeAI from '../handlers/PlayerIA';
import RenderBoard from './RenderBoard';

const TicTacToe = () => {
  const ticTacToeGame = useRef(new TicTacToeAI()).current; // Usar la clase con lógica de IA
  const [boardData, setBoardData] = useState<number[][]>(ticTacToeGame.getBoardData());
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1); // Jugador 1 comienza
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  const [winnerType, setWinnerType] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un ganador después de cada movimiento
    const winnerResult = ticTacToeGame.checkWinner();
    const boardIsFull = ticTacToeGame.isBoardFull();

    if (boardIsFull && !winnerResult) {
      setWinner(null); // Empate
      setGameOver(true);
      return;
    }

    if (winnerResult) {
      setWinner(winnerResult.winner);
      setWinnerType(winnerResult.type);
      setGameOver(true); // El juego ha terminado
      return;
    }

    // Si no hay ganador y es el turno de la máquina
    if (currentPlayer === 2 && !gameOver) {
      InteractionManager.runAfterInteractions(() => {
        handleAIMove();
      });
    }
  }, [boardData]); // Se ejecuta cada vez que se actualiza boardData

  const handlePress = (row: number, col: number) => {
    if (gameOver || currentPlayer !== 1) return; // No permitir jugadas si el juego ha terminado o no es el turno del jugador

    // Realizar el movimiento
    const validMove = ticTacToeGame.makeMove(row, col, currentPlayer);
    if (validMove) {
      setBoardData([...ticTacToeGame.getBoardData()]); // Actualizar el estado del tablero
      setCurrentPlayer(2); // Cambiar al jugador 2 (IA)
    }
  };

  const handleAIMove = () => {
    setTimeout(() => {
      // Hacer el movimiento de la máquina
      const aiMove = ticTacToeGame.makeAIMove(2); // El jugador 2 es la IA
      if (aiMove) {
        setBoardData([...ticTacToeGame.getBoardData()]); // Actualizar el estado del tablero
        setCurrentPlayer(1); // Cambiar al jugador 1 (Humano)
      }
    }, 1500);
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
      {gameOver === false
          ? <Text style={styles.textIndicator}>Es turno del jugador {currentPlayer}</Text>
          : <Text style={styles.textIndicator}>Juego terminado {winner !== null ? `ganó el jugador ${winner}` : 'Empate'}</Text>
      }
      <View style={styles.board}>
        <RenderBoard
          currentPlayer={currentPlayer}
          handlePress={handlePress}
          boardData={boardData}
        />
      </View>

      {gameOver && winner === null && (
        <Text style={styles.remakeText} onPress={handleRemakeGame}>
          Jugar de nuevo
        </Text>
      )}

      {gameOver && winner !== null && (
        <View style={styles.result}>
          <Text style={styles.winnerText}>
            ¡Gana por la jugada {winnerType}!
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
    padding: 10,
    backgroundColor: '#1aedea',
    fontSize: 16,
    color: 'black',
    fontWeight: '200',
    textDecorationLine: 'none',
    borderRadius: 12,
    marginTop: 10,
  },
  textIndicator: {
    fontSize: 18,
    color: 'black'
  },
});

export default TicTacToe;