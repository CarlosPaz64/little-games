/**
 * Genera un tablero de crucigrama basado en las palabras y sus pistas.
 * @param wordsWithClues - Array de objetos con palabras y sus pistas.
 * @returns Un objeto con el tablero y las pistas organizadas.
 */
export const generateBoard = (
  wordsWithClues: { word: string; clue: string }[]
): {
  board: string[][]; // Tablero de crucigrama
  clues: { direction: string; clue: string }[]; // Pistas organizadas
} => {
  const boardSize = 10; // Tamaño fijo del tablero (puedes parametrizarlo si lo deseas)
  const board = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill("")); // Tablero vacío

  const clues: { direction: string; clue: string }[] = [];
  let currentRow = 0;

  wordsWithClues.forEach((item, index) => {
    const { word, clue } = item;

    // Alternar entre dirección horizontal y vertical
    const isHorizontal = index % 2 === 0;

    if (isHorizontal) {
      // Insertar palabra horizontalmente
      for (let i = 0; i < word.length; i++) {
        if (currentRow < boardSize && i < boardSize) {
          board[currentRow][i] = word[i];
        }
      }
      clues.push({ direction: "Horizontal", clue });
      currentRow += 2; // Saltar filas para evitar superposiciones
    } else {
      // Insertar palabra verticalmente
      for (let i = 0; i < word.length; i++) {
        if (currentRow + i < boardSize) {
          board[currentRow + i][0] = word[i];
        }
      }
      clues.push({ direction: "Vertical", clue });
    }
  });

  return { board, clues };
};
