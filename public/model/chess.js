import { Chess } from 'chess.js'

class Chessgame {
    constructor(FEN, nextMoves) {
        this.chess = new Chess()
        this.nextMoves = nextMoves
        this.FEN = FEN
    }

    nextMove() {
        // functionality for what squares change and how for the next move
    }

    previousMove() {
        // functionality for what squares change and how for the previous move
    }
}

export default Chessgame