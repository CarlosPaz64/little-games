import React from 'react';
import BoxInput from './BoxInput'; // Asegúrate de tener este componente creado

interface RenderBoardProps {
    currentPlayer: 1 | 2 | undefined; // Recibimos el jugador actual
    handlePress: (row: number, col: number) => void; // Recibimos la función para manejar el presionado
    boardData: number[][]; // Recibimos los datos del board
}

const RenderBoard: React.FC<RenderBoardProps> = ({ currentPlayer, handlePress, boardData }) => {
    const rows = 3;
    const cols = 3;
    const board = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            board.push(
                <BoxInput
                    key={`${row}-${col}`}
                    player={boardData[row][col]} // Pasamos el valor de la celda desde boardData
                    row={row}
                    col={col}
                    onPress={() => handlePress(row, col)} // Pasamos la función para manejar el presionado
                />
            );
        }
    }

    return <>{board}</>;
};

export default RenderBoard;
