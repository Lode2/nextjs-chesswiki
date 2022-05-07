import { Chess } from 'chess.js'

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
        this.moveArray = this.nextMoves.match(/[O](-[O]){1,2}|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](\=[QRBN])?[+#]?/g)
    }

    getPosition() {
        this.pieceArray = [].concat.apply([], this.chess.board().reverse()).map(item => {
            return item === null ? null : (item.type + item.color)
        })
        // console.log(this.pieceArray)
        this.positionArray = [{
            "squareId": "a1",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[0],
            "index": 0
        },
        {
            "squareId": "b1",
            "squareColor": "light",
            "chessPiece": this.pieceArray[1],
            "index": 1
        },
        {
            "squareId": "c1",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[2],
            "index": 2
        },
        {
            "squareId": "d1",
            "squareColor": "light",
            "chessPiece": this.pieceArray[3],
            "index": 3
        },
        {
            "squareId": "e1",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[4],
            "index": 4
        },
        {
            "squareId": "f1",
            "squareColor": "light",
            "chessPiece": this.pieceArray[5],
            "index": 5
        },
        {
            "squareId": "g1",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[6],
            "index": 6
        },
        {
            "squareId": "h1",
            "squareColor": "light",
            "chessPiece": this.pieceArray[7],
            "index": 7
        },
        {
            "squareId": "a2",
            "squareColor": "light",
            "chessPiece": this.pieceArray[8],
            "index": 8
        },
        {
            "squareId": "b2",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[9],
            "index": 9
        },
        {
            "squareId": "c2",
            "squareColor": "light",
            "chessPiece": this.pieceArray[10],
            "index": 10
        },
        {
            "squareId": "d2",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[11],
            "index": 11
        },
        {
            "squareId": "e2",
            "squareColor": "light",
            "chessPiece": this.pieceArray[12],
            "index": 12
        },
        {
            "squareId": "f2",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[13],
            "index": 13
        },
        {
            "squareId": "g2",
            "squareColor": "light",
            "chessPiece": this.pieceArray[14],
            "index": 14
        },
        {
            "squareId": "h2",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[15],
            "index": 15
        },
        {
            "squareId": "a3",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[16],
            "index": 16
        },
        {
            "squareId": "b3",
            "squareColor": "light",
            "chessPiece": this.pieceArray[17],
            "index": 17
        },
        {
            "squareId": "c3",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[18],
            "index": 18
        },
        {
            "squareId": "d3",
            "squareColor": "light",
            "chessPiece": this.pieceArray[19],
            "index": 19
        },
        {
            "squareId": "e3",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[20],
            "index": 20
        },
        {
            "squareId": "f3",
            "squareColor": "light",
            "chessPiece": this.pieceArray[21],
            "index": 21
        },
        {
            "squareId": "g3",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[22],
            "index": 22
        },
        {
            "squareId": "h3",
            "squareColor": "light",
            "chessPiece": this.pieceArray[23],
            "index": 23
        },
        {
            "squareId": "a4",
            "squareColor": "light",
            "chessPiece": this.pieceArray[24],
            "index": 24
        },
        {
            "squareId": "b4",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[25],
            "index": 25
        },
        {
            "squareId": "c4",
            "squareColor": "light",
            "chessPiece": this.pieceArray[26],
            "index": 26
        },
        {
            "squareId": "d4",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[27],
            "index": 27
        },
        {
            "squareId": "e4",
            "squareColor": "light",
            "chessPiece": this.pieceArray[28],
            "index": 28
        },
        {
            "squareId": "f4",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[29],
            "index": 29
        },
        {
            "squareId": "g4",
            "squareColor": "light",
            "chessPiece": this.pieceArray[30],
            "index": 30
        },
        {
            "squareId": "h4",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[31],
            "index": 31
        },
        {
            "squareId": "a5",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[32],
            "index": 32
        },
        {
            "squareId": "b5",
            "squareColor": "light",
            "chessPiece": this.pieceArray[33],
            "index": 33
        },
        {
            "squareId": "c5",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[34],
            "index": 34
        },
        {
            "squareId": "d5",
            "squareColor": "light",
            "chessPiece": this.pieceArray[35],
            "index": 35
        },
        {
            "squareId": "e5",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[36],
            "index": 36
        },
        {
            "squareId": "f5",
            "squareColor": "light",
            "chessPiece": this.pieceArray[37],
            "index": 37
        },
        {
            "squareId": "g5",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[38],
            "index": 38
        },
        {
            "squareId": "h5",
            "squareColor": "light",
            "chessPiece": this.pieceArray[39],
            "index": 39
        },
        {
            "squareId": "a6",
            "squareColor": "light",
            "chessPiece": this.pieceArray[40],
            "index": 40
        },
        {
            "squareId": "b6",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[41],
            "index": 41
        },
        {
            "squareId": "c6",
            "squareColor": "light",
            "chessPiece": this.pieceArray[42],
            "index": 42
        },
        {
            "squareId": "d6",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[43],
            "index": 43
        },
        {
            "squareId": "e6",
            "squareColor": "light",
            "chessPiece": this.pieceArray[44],
            "index": 44
        },
        {
            "squareId": "f6",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[45],
            "index": 45
        },
        {
            "squareId": "g6",
            "squareColor": "light",
            "chessPiece": this.pieceArray[46],
            "index": 46
        },
        {
            "squareId": "h6",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[47],
            "index": 47
        },
        {
            "squareId": "a7",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[48],
            "index": 48
        },
        {
            "squareId": "b7",
            "squareColor": "light",
            "chessPiece": this.pieceArray[49],
            "index": 49
        },
        {
            "squareId": "c7",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[50],
            "index": 50
        },
        {
            "squareId": "d7",
            "squareColor": "light",
            "chessPiece": this.pieceArray[51],
            "index": 51
        },
        {
            "squareId": "e7",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[52],
            "index": 52
        },
        {
            "squareId": "f7",
            "squareColor": "light",
            "chessPiece": this.pieceArray[53],
            "index": 53
        },
        {
            "squareId": "g7",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[54],
            "index": 54
        },
        {
            "squareId": "h7",
            "squareColor": "light",
            "chessPiece": this.pieceArray[55],
            "index": 55
        },
        {
            "squareId": "a8",
            "squareColor": "light",
            "chessPiece": this.pieceArray[56],
            "index": 56
        },
        {
            "squareId": "b8",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[57],
            "index": 57
        },
        {
            "squareId": "c8",
            "squareColor": "light",
            "chessPiece": this.pieceArray[58],
            "index": 58
        },
        {
            "squareId": "d8",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[59],
            "index": 59
        },
        {
            "squareId": "e8",
            "squareColor": "light",
            "chessPiece": this.pieceArray[60],
            "index": 60
        },
        {
            "squareId": "f8",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[61],
            "index": 61
        },
        {
            "squareId": "g8",
            "squareColor": "light",
            "chessPiece": this.pieceArray[62],
            "index": 62
        },
        {
            "squareId": "h8",
            "squareColor": "dark",
            "chessPiece": this.pieceArray[63],
            "index": 63
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