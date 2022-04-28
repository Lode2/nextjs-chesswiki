import { Chess } from 'chess.js'

class Chessgame {
    constructor(FEN, nextMoves) {
        this.chess = new Chess()
        this.nextMoves = nextMoves
        this.FEN = FEN
    }

    loadPos() {
        this.chess.load(this.FEN)
        // load new position
    }

    getBoardSquares() {
        const squaresArray = this.chess.board()
        const boardSquares = [].concat.apply([], squaresArray.reverse())
        return boardSquares
        // return the 64-length array containing all the info for the board squares (color, piece or not, square id)
    }

    getChangeOnMove() {
        // return the array that contains which square changes for every move 
        // using this.chess, this.nextMoves and this.FEN
        // keys: from (0, 1, ..., 63), to (0, 1, ..., 63), piecename (bb, bw, pb, ...), movenumber (1, 1.5, 2, ...)
        // so :
        // [[movenumber, [from, to, piecename, piececolor], [from, to, piecename, piececolor]],
        // ...,
        // [movenumber, [from, to, piecename, piececolor], [from, to, piecename, piececolor]]]
        const boardSquares = Array.from(Array(64).keys()).map(item => {

            return [movenumber, [from, to, piecename, piececolor], [from, to, piecename, piececolor]]
            // return <Newchessboardsquare key={item} squareNumber={item} chessPiece={positionPieceArray[item]} squareColor={squareColors[item]} size={props.chessboardSize * 0.5 * 0.125} />
        })
    }

    nextMove() {
        // functionality for what squares change and how for the next move

    }

    previousMove() {
        // functionality for what squares change and how for the previous move
    }
}

export default Chessgame