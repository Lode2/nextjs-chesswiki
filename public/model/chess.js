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
        if (this.nextMoves === '') {
            return console.error('No next moves have been found.')
        }
        // split the moves by recognizing the types of chess moves, credit: https://8bitclassroom.com/2020/08/16/chess-in-regex/
        const moveArray = this.nextMoves.match(/[O](-[O]){1,2}|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](\=[QRBN])?[+#]?/g)
        // console.log(moveArray)
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

    getStartingPosition() {
        const chess = new Chess(this.FEN)
        // 0=light, 1=dark
        const squareColors = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1,]
        const squareIds = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',]
        return [].concat.apply([], chess.board().reverse()).map((item, index) => {
            return [squareIds[index], squareColors[index] === 0 ? 'light' : 'dark', item === null ? null : item.type + item.color]
        })
    }

    getBoardSquares() {
        const squaresArray = this.chess.board()
        const boardSquares = [].concat.apply([], squaresArray.reverse())
        return boardSquares
        // return the 64-length array containing all the info for the board squares (color, piece or not, square id)
    }

    nextMove() {
        // functionality for what squares change and how for the next move

    }

    previousMove() {
        // functionality for what squares change and how for the previous move
    }
}