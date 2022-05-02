import { useState, useEffect } from "react";
import Newchessboardsquare from "./newchessboardsquare";
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const newFEN = '7R/Bk2n3/5p1p/p5pb/5P1b/1P2P1P1/P6K/8 w - - 2 40'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

const chessgame = new Chessgame(exampleFEN, moves)
chessgame.loadOpening()
const startingPositionPieceArray = chessgame.getStartingPosition()

export default function Newchessboard(props) {
    const squareSize = props.chessboardSize * 0.5 * 0.125
    const [pieceArray, setPieceArray] = useState(startingPositionPieceArray)
    const [boardSquares, setBoardSquares] = useState()
    // the bug is that the position shown on screen is the position that has been calculated on the previous
    // rerender caused by moveCounter
    // this might be because usestate is asynchronous and the state is not updated yet before re-render
    // a solution could be useStateCallback, but I dont know how that would work.
    // another solution, which could actually work, is to add the buttons in this component, setting a function in them
    // onPress, which should be pretty easy to implement.
    useEffect(() => {
        setPieceArray(startingPositionPieceArray)
        setBoardSquares(createSquareProp(pieceArray))
    }, [])
    useEffect(() => {
        setPieceArray(chessgame.getUpdatedPosition(props.moveCounter))
        setBoardSquares(createSquareProp(pieceArray))
    }, [props.moveCounter])

    function createSquareProp(rawList) {
        return rawList.map(item => {
            return <Newchessboardsquare key={item.index} squareNumber={item.index} squareId={item.squareId} chessPiece={item.chessPiece} squareColor={item.squareColor} size={squareSize} />
        })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.chessboardSize * 0.5,
            height: 'auto'
        }}>
            {/* {createSquareProp(boardSquares)} */}
            {/* {positionPieceArray} */}
            {boardSquares}
            {`currentmove: ${props.moveCounter}`}
            {pieceArray[12].chessPiece}
        </div >
    )
}