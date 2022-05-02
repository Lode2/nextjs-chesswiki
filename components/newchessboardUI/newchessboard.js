import { useState, useEffect } from "react";
import Newchessboardsquare from "./newchessboardsquare";
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const newFEN = '7R/Bk2n3/5p1p/p5pb/5P1b/1P2P1P1/P6K/8 w - - 2 40'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

const chessgame = new Chessgame(exampleFEN, moves)
chessgame.loadOpening()
const positionPieceArray = chessgame.getStartingPosition()
// console.log(chessgame.squareChangeOnMove)

// const [pieces, setPieces] = useState([])

export default function Newchessboard(props) {
    // create the 64 squares list
    const boardSquares = Array.from(Array(64).keys()).map(item => {
        return <Newchessboardsquare key={item} squareNumber={item} squareId={positionPieceArray[item][0]} chessPiece={positionPieceArray[item][2]} squareColor={positionPieceArray[item][1]} size={props.chessboardSize * 0.5 * 0.125} />
    })
    // console.log(boardSquares[0].props.squareId)
    chessgame.squareChangeOnMove[props.moveCounter].forEach(item => {
        // console.log(item)
        const needsUpdateIndex = boardSquares.find(x => x.props.squareId === item[0]).props.squareNumber
        // boardSquares[needsUpdateIndex].props.chessPiece = item[2]
        boardSquares[needsUpdateIndex] = <Newchessboardsquare key={needsUpdateIndex} squareNumber={needsUpdateIndex} squareId={item[0]} chessPiece={item[2]} squareColor={'dark'} size={props.chessboardSize * 0.5 * 0.125} />
        // console.log(needsUpdateIndex)
    })
    // console.log(props.moveCounter)

    // trying to update a single square, found out that you should use react.memo to check whether the props have been changed
    // and if they are, the square component should update
    // useEffect(() => {
    //     console.log("move changed")
    //     // console.log(boardSquares)
    //     boardSquares[8] = <Newchessboardsquare key={'newsquare'} squareNumber={8} chessPiece={null} squareColor={d} size={props.chessboardSize * 0.5 * 0.125} />
    // }, [props.currentMove > 2 ? true : false])

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.chessboardSize * 0.5,
            height: 'auto'
        }}>
            {boardSquares}
        </div >
    )
}