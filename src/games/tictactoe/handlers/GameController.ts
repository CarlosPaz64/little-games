// Interface to know the winning player
interface WinnerResult {
    winner: number; // Number of player
    type: 'row' | 'column' | 'main_diagonal' | 'secondary_diagonal'; // Type of victory
}

/**
 * Class to create a logic the game Tic Tac Toe
 * 
 * This class implements the logic necessary to various 
 * functionalities in the game Tic Tac Toe.
 */
class TicTacToeGame {
    // Variables
    boardData: number[][];
    constructor() {
        console.log('Starting the game @Tic Tac Toe');
        this.boardData = this.initializateGame();
    }

    /**
     * Function to inicializate the Tic Tac Toe
     * 
     * This method remake the game or initializate, the values are returned to their base state (0),
     * @returns {number[][]} boardData initial
    */
    private initializateGame(): number[][] {
        return [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }

    /**
     * Function to check the move of the player on the Tic Tac Toe
     * 
     * Returns true if the move is valid,
     * and returns false if the move is invalid.
     * @returns {boolean} `true` is move valid, `false` is invalid
    */
    isMoveValid(row: number, col: number): boolean {
        return this.boardData[row][col] === 0;
    }

    /**
     * Function to check the winner the player on the Tic Tac Toe
     * 
     * Returns true if the move is valid,
     * and returns false if the move is invalid.
     * @returns {winner: number, type: string, index: } `winner` is the value of player, `type` is the move used to win
    */
    checkWinner(): WinnerResult | null {
        const dimension: number = 3; // Dimensions of the board, typical Tic Tac Toe

        // Check rows and columns
        for (let i = 0; i < dimension; i++) {
            // Verify row
            if (this.boardData[i][0] && this.boardData[i][0] === this.boardData[i][1] && this.boardData[i][1] === this.boardData[i][2]) {
                return { winner: this.boardData[i][0], type: 'row' };
            }

            // Verify col
            if (this.boardData[0][i] && this.boardData[0][i] === this.boardData[1][i] && this.boardData[1][i] === this.boardData[2][i]) {
                return { winner: this.boardData[0][i], type: 'column' };
            }
        }

        // Check main diagonal
        if (this.boardData[0][0] && this.boardData[0][0] === this.boardData[1][1] && this.boardData[1][1] === this.boardData[2][2]) {
            return { winner: this.boardData[0][0], type: 'main_diagonal' };
        }

        // Check secondary diagonal
        if (this.boardData[0][2] && this.boardData[0][2] === this.boardData[1][1] && this.boardData[1][1] === this.boardData[2][0]) {
            return { winner: this.boardData[0][2], type: 'secondary_diagonal' };
        }

        // There is no winner
        return null;
    }

    /**
     * Function to remake the Tic Tac Toe
     * 
     * This method remake the game, the values are returned to their base state (0),
     * and the console indicates the game are remade.
     * @returns {void}
    */
    remakeGame(): void {
        console.log('Game remade @Tic Tac Toe');
        this.boardData = this.initializateGame();
    }

    /**
     * Function to generate a movement on the board.
     * 
     * Returns true if the move is valid and updates the data board,
     * and returns false if the move is invalid and does not update the data board.
     * @returns {boolean} `true` is a valid move and board change, `false` is invalid and the board does not change
    */
    makeMove(row: number, col: number, player: number): boolean {
        // Validating the move
        if (this.isMoveValid(row, col)) {
            this.boardData[row][col] = player;
            return true;
        }
        return false;
    }

    getBoardData(): number[][] {
        return this.boardData;
    }

    /**
     * Function to check if the board is full.
     * 
     * This method checks if all cells in the board are occupied (no empty spaces left).
     * @returns {boolean} `true` if the board is full, `false` otherwise.
    */
    isBoardFull(): boolean {
        return this.boardData.every(row => row.every(cell => cell !== 0));
    }

}

export default TicTacToeGame;