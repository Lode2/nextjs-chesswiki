import { Chess } from 'chess.js'
// om de verschillen in het bord te krijgen is het het beste om de zetten te spelen in chess.js met chess.move() en
// dan vervolgens de zetten te krijgen met chess.history([verbose: true])

export default class Chessgame {
    constructor(FEN, nextMoves) {
        this.chess = new Chess()
        this.nextMoves = nextMoves
        this.FEN = FEN
    }

    // load the position, make all the moves in the variation and save the changes to the affected squares after every move
    loadOpening() {
        this.chess.load(this.FEN)
        // split the moves by recognizing the types of chessmoves, credit: https://8bitclassroom.com/2020/08/16/chess-in-regex/
        const moveArray = this.nextMoves.match(/[O](-[O]){1,2}|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](\=[QRBN])?[+#]?/g)

        this.squareChangeOnMove = moveArray.map((item) => {
            const newMove = this.chess.move(item) // execute the half move
            // return: [[square1, prevvalue1, newvalue1], [square2, prevvalue2, newvalue2], ...]
            if (newMove.flags === 'n' || newMove.flags === 'b') {
                return [[newMove.from, newMove.piece + newMove.color, null], [newMove.to, null, newMove.piece + newMove.color]]
            } // # squares /w change: 2
            else if (newMove.flags === 'c') {
                return [[newMove.from, newMove.piece + newMove.color, null], [newMove.to, newMove.captured + (newMove.color === 'b' ? 'w' : 'b'), newMove.piece + newMove.color]]
            } // # squares /w change: 2
            else if (newMove.flags === 'k') {
                return newMove.color === 'w' ? (
                    [['e1', 'kw', null], ['g1', null, 'kw'], ['h1', 'rw', null], ['f1', null, 'rw']]
                ) : (
                    [['e8', 'kb', null], ['g8', null, 'kb'], ['h8', 'rb', null], ['f8', null, 'rb']]
                )
            } // # squares /w change: 4
            else if (newMove.flags === 'q') {
                return newMove.color === 'w' ? (
                    [['e1', 'kw', null], ['c1', null, 'kw'], ['a1', 'rw', null], ['d1', null, 'rw']]
                ) : (
                    [['e8', 'kb', null], ['c8', null, 'kb'], ['a8', 'rb', null], ['d8', null, 'rb']]
                )
            } // # squares /w change: 4
            else if (newMove.flags === 'e') {
                return [[newMove.from, newMove.piece + newMove.color, null], [newMove.to, null, newMove.piece + newMove.color], [newMove.to[0] + (newMove.color === 'w' ? (parseInt(newMove.to[1]) - 1) : (parseInt(newMove.to[1]) + 1)), newMove.captured + (newMove.color === 'b' ? 'w' : 'b'), null]]
            } // # squares /w change: 3
            else if (newMove.flags === 'np') {
                return [[newMove.from, newMove.piece + newMove.color, null], [newMove.to, null, newMove.promotion + newMove.color]]
            } // # squares /w change: 2
            else {
                return [[newMove.from, newMove.piece + newMove.color, null], [newMove.to, newMove.captured + (newMove.color === 'b' ? 'w' : 'b'), newMove.promotion + newMove.color]]
            } // 'cp', # squares /w change: 2
        })

        // console.log(moveArray)
        // console.log(this.squareChangeOnMove)
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
        // const boardSquares = Array.from(Array(64).keys()).map(item => {

        //     return [movenumber, [from, to, piecename, piececolor], [from, to, piecename, piececolor]]
        //     // return <Newchessboardsquare key={item} squareNumber={item} chessPiece={positionPieceArray[item]} squareColor={squareColors[item]} size={props.chessboardSize * 0.5 * 0.125} />
        // })
        console.log(this.chess.history({ verbose: true }))
        [squareid, previousvalue, newvalue]
        const squareChangeOnMove = this.chess.history({ verbose: true }).map(({ captured, color, flags, from, piece, san, to }) => {
            return from + to
            // return [movenumber, [from, to, piecename, piececolor], [from, to, piecename, piececolor]]
        })
        console.log(squareChangeOnMove)
    }

    nextMove() {
        // functionality for what squares change and how for the next move

    }

    previousMove() {
        // functionality for what squares change and how for the previous move
    }
}