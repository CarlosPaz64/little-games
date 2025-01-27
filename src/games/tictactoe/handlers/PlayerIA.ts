import TicTacToeGame from "./GameController";

class TicTacToeAI extends TicTacToeGame {
    constructor() {
        super();
    }

    /**
     * Function for the AI to make a move.
     * Uses a simple strategy or Minimax algorithm to decide the best move.
     * @param player Number representing the AI player (e.g., 2 for AI)
     * @returns {boolean} `true` if the move was successful, `false` otherwise.
     */
    makeAIMove(player: number = 2): boolean {
        const move = this.getBestMove(player);
        if (move) {
            return this.makeMove(move.row, move.col, player);
        }
        return false;
    }

    /**
     * Function to calculate the best move for the AI.
     * Uses the Minimax algorithm.
     * @param player Number representing the AI player
     * @returns {{row: number, col: number} | null} Best move or null if no move is possible.
     */
    private getBestMove(player: number): { row: number; col: number } | null {
        let bestScore = -Infinity;
        let bestMove: { row: number; col: number } | null = null;

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.isMoveValid(row, col)) {
                    // Make the move temporarily
                    this.boardData[row][col] = player;

                    // Evaluate the move using Minimax
                    const score = this.minimax(0, false, player);

                    // Undo the move
                    this.boardData[row][col] = 0;

                    // Update the best score and move
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { row, col };
                    }
                }
            }
        }

        return bestMove;
    }

    /**
     * Minimax algorithm to evaluate the board state.
     * @param depth Current depth in the tree
     * @param isMaximizing Boolean indicating if the current turn is maximizing
     * @param player Number representing the AI player
     * @returns {number} Score of the board state
     */
    private minimax(depth: number, isMaximizing: boolean, player: number): number {
        const winner = this.checkWinner();
        if (winner) {
            // Return a large positive or negative value based on who wins
            return winner.winner === player ? 10 - depth : depth - 10;
        }

        if (this.isBoardFull()) {
            return 0; // Tie
        }

        const opponent = player === 1 ? 2 : 1;
        let bestScore = isMaximizing ? -Infinity : Infinity;

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.isMoveValid(row, col)) {
                    // Make the move temporarily
                    this.boardData[row][col] = isMaximizing ? player : opponent;

                    // Recursively evaluate the board
                    const score = this.minimax(depth + 1, !isMaximizing, player);

                    // Undo the move
                    this.boardData[row][col] = 0;

                    // Update the best score
                    bestScore = isMaximizing
                        ? Math.max(score, bestScore)
                        : Math.min(score, bestScore);
                }
            }
        }

        return bestScore;
    }

    /**
     * Function to check if the board is full.
     * @returns {boolean} `true` if the board is full, `false` otherwise.
     */
    isBoardFull(): boolean {
        return this.boardData.every(row => row.every(cell => cell !== 0));
    }
}

export default TicTacToeAI;
