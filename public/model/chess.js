import { Chess } from 'chess.js'

export default class Chessgame {
    constructor(FEN, moveArray) {
        this.chess = new Chess()
        this.FEN = FEN
        this.moveArray = moveArray
    }

    // load the position, make all the moves in the variation and save the changes to the affected squares after every move
    loadOpening() {
        this.chess.load(this.FEN)
        if (this.nextMoves === '') {
            return console.error('No next moves have been found.')
        }
    }

    getPosition() {
        this.pieceArray = [].concat.apply([], this.chess.board().reverse()).map(item => {
            return item === null ? null : (item.type + item.color)
        })
        this.positionArray = [{
            squareId: "a1",
            chessPiece: this.pieceArray[0],
            index: 0,
            squareIdNotation: "a1"
        },
        {
            squareId: "b1",
            squareColor: "light",
            chessPiece: this.pieceArray[1],
            index: 1,
            squareIdNotation: 'b'
        },
        {
            squareId: "c1",
            chessPiece: this.pieceArray[2],
            index: 2,
            squareIdNotation: 'c'
        },
        {
            squareId: "d1",
            squareColor: "light",
            chessPiece: this.pieceArray[3],
            index: 3,
            squareIdNotation: 'd'
        },
        {
            squareId: "e1",
            chessPiece: this.pieceArray[4],
            index: 4,
            squareIdNotation: 'e'
        },
        {
            squareId: "f1",
            squareColor: "light",
            chessPiece: this.pieceArray[5],
            index: 5,
            squareIdNotation: 'f'
        },
        {
            squareId: "g1",
            chessPiece: this.pieceArray[6],
            index: 6,
            squareIdNotation: 'g'
        },
        {
            squareId: "h1",
            squareColor: "light",
            chessPiece: this.pieceArray[7],
            index: 7,
            squareIdNotation: 'h'
        },
        {
            squareId: "a2",
            squareColor: "light",
            chessPiece: this.pieceArray[8],
            index: 8,
            squareIdNotation: 2
        },
        {
            squareId: "b2",
            chessPiece: this.pieceArray[9],
            index: 9
        },
        {
            squareId: "c2",
            squareColor: "light",
            chessPiece: this.pieceArray[10],
            index: 10
        },
        {
            squareId: "d2",
            chessPiece: this.pieceArray[11],
            index: 11
        },
        {
            squareId: "e2",
            squareColor: "light",
            chessPiece: this.pieceArray[12],
            index: 12
        },
        {
            squareId: "f2",
            chessPiece: this.pieceArray[13],
            index: 13
        },
        {
            squareId: "g2",
            squareColor: "light",
            chessPiece: this.pieceArray[14],
            index: 14
        },
        {
            squareId: "h2",
            chessPiece: this.pieceArray[15],
            index: 15
        },
        {
            squareId: "a3",
            chessPiece: this.pieceArray[16],
            index: 16,
            squareIdNotation: 3
        },
        {
            squareId: "b3",
            squareColor: "light",
            chessPiece: this.pieceArray[17],
            index: 17
        },
        {
            squareId: "c3",
            chessPiece: this.pieceArray[18],
            index: 18
        },
        {
            squareId: "d3",
            squareColor: "light",
            chessPiece: this.pieceArray[19],
            index: 19
        },
        {
            squareId: "e3",
            chessPiece: this.pieceArray[20],
            index: 20
        },
        {
            squareId: "f3",
            squareColor: "light",
            chessPiece: this.pieceArray[21],
            index: 21
        },
        {
            squareId: "g3",
            chessPiece: this.pieceArray[22],
            index: 22
        },
        {
            squareId: "h3",
            squareColor: "light",
            chessPiece: this.pieceArray[23],
            index: 23
        },
        {
            squareId: "a4",
            squareColor: "light",
            chessPiece: this.pieceArray[24],
            index: 24,
            squareIdNotation: 4
        },
        {
            squareId: "b4",
            chessPiece: this.pieceArray[25],
            index: 25
        },
        {
            squareId: "c4",
            squareColor: "light",
            chessPiece: this.pieceArray[26],
            index: 26
        },
        {
            squareId: "d4",
            chessPiece: this.pieceArray[27],
            index: 27
        },
        {
            squareId: "e4",
            squareColor: "light",
            chessPiece: this.pieceArray[28],
            index: 28
        },
        {
            squareId: "f4",
            chessPiece: this.pieceArray[29],
            index: 29
        },
        {
            squareId: "g4",
            squareColor: "light",
            chessPiece: this.pieceArray[30],
            index: 30
        },
        {
            squareId: "h4",
            chessPiece: this.pieceArray[31],
            index: 31
        },
        {
            squareId: "a5",
            chessPiece: this.pieceArray[32],
            index: 32,
            squareIdNotation: 5
        },
        {
            squareId: "b5",
            squareColor: "light",
            chessPiece: this.pieceArray[33],
            index: 33
        },
        {
            squareId: "c5",
            chessPiece: this.pieceArray[34],
            index: 34
        },
        {
            squareId: "d5",
            squareColor: "light",
            chessPiece: this.pieceArray[35],
            index: 35
        },
        {
            squareId: "e5",
            chessPiece: this.pieceArray[36],
            index: 36
        },
        {
            squareId: "f5",
            squareColor: "light",
            chessPiece: this.pieceArray[37],
            index: 37
        },
        {
            squareId: "g5",
            chessPiece: this.pieceArray[38],
            index: 38
        },
        {
            squareId: "h5",
            squareColor: "light",
            chessPiece: this.pieceArray[39],
            index: 39
        },
        {
            squareId: "a6",
            squareColor: "light",
            chessPiece: this.pieceArray[40],
            index: 40,
            squareIdNotation: 6
        },
        {
            squareId: "b6",
            chessPiece: this.pieceArray[41],
            index: 41
        },
        {
            squareId: "c6",
            squareColor: "light",
            chessPiece: this.pieceArray[42],
            index: 42
        },
        {
            squareId: "d6",
            chessPiece: this.pieceArray[43],
            index: 43
        },
        {
            squareId: "e6",
            squareColor: "light",
            chessPiece: this.pieceArray[44],
            index: 44
        },
        {
            squareId: "f6",
            chessPiece: this.pieceArray[45],
            index: 45
        },
        {
            squareId: "g6",
            squareColor: "light",
            chessPiece: this.pieceArray[46],
            index: 46
        },
        {
            squareId: "h6",
            chessPiece: this.pieceArray[47],
            index: 47
        },
        {
            squareId: "a7",
            chessPiece: this.pieceArray[48],
            index: 48,
            squareIdNotation: 7
        },
        {
            squareId: "b7",
            squareColor: "light",
            chessPiece: this.pieceArray[49],
            index: 49
        },
        {
            squareId: "c7",
            chessPiece: this.pieceArray[50],
            index: 50
        },
        {
            squareId: "d7",
            squareColor: "light",
            chessPiece: this.pieceArray[51],
            index: 51
        },
        {
            squareId: "e7",
            chessPiece: this.pieceArray[52],
            index: 52
        },
        {
            squareId: "f7",
            squareColor: "light",
            chessPiece: this.pieceArray[53],
            index: 53
        },
        {
            squareId: "g7",
            chessPiece: this.pieceArray[54],
            index: 54
        },
        {
            squareId: "h7",
            squareColor: "light",
            chessPiece: this.pieceArray[55],
            index: 55
        },
        {
            squareId: "a8",
            squareColor: "light",
            chessPiece: this.pieceArray[56],
            index: 56,
            squareIdNotation: 8
        },
        {
            squareId: "b8",
            chessPiece: this.pieceArray[57],
            index: 57
        },
        {
            squareId: "c8",
            squareColor: "light",
            chessPiece: this.pieceArray[58],
            index: 58
        },
        {
            squareId: "d8",
            chessPiece: this.pieceArray[59],
            index: 59
        },
        {
            squareId: "e8",
            squareColor: "light",
            chessPiece: this.pieceArray[60],
            index: 60
        },
        {
            squareId: "f8",
            chessPiece: this.pieceArray[61],
            index: 61
        },
        {
            squareId: "g8",
            squareColor: "light",
            chessPiece: this.pieceArray[62],
            index: 62
        },
        {
            squareId: "h8",
            chessPiece: this.pieceArray[63],
            index: 63
        }]
        return this.positionArray
    }

    nextMove(moveCounter, moveDiff) {
        // console.log(`making the move ${this.moveArray[moveCounter]}`)
        // while moveCounter is not equal to the current move of position, make next move
        for (let i = moveDiff; i > 0; i--) {
            this.chess.move(this.moveArray[moveCounter - i + 1])
        }
        this.getPosition()
    }

    previousMove(moveCounter, moveDiff) {
        // console.log(`undoing the move ${this.moveArray[moveCounter]}`)
        for (let i = moveDiff; i > 0; i--) {
            this.chess.undo()
        }
        this.getPosition()
    }
}