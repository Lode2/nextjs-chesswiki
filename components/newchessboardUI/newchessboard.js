import { useState, useEffect } from "react";
import Newchessboardsquare from "./newchessboardsquare";
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const newFEN = '7R/Bk2n3/5p1p/p5pb/5P1b/1P2P1P1/P6K/8 w - - 2 40'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

const chessgame = new Chessgame(exampleFEN, moves)
chessgame.loadOpening()
const startingPositionPieceArray = chessgame.getStartingPosition()
// let pieceArray = startingPositionPieceArray


export default function Newchessboard(props) {
    const squareSize = props.chessboardSize * 0.5 * 0.125
    const [pieceArray, setPieceArray] = useState(startingPositionPieceArray)
    useEffect(() => {
        setPieceArray(startingPositionPieceArray)
        // pieceArray = startingPositionPieceArray
        // console.log(pieceArray)
    }, [])
    useEffect(() => {
        setPieceArray(chessgame.getUpdatedPosition(props.moveCounter))
        // pieceArray = chessgame.getUpdatedPosition(props.moveCounter)
        // console.log(pieceArray)
    }, [props.moveCounter])

    // const [rawBoardSquares, setRawBoardSquares] = useState()
    // const [boardSquares, setBoardSquares] = useState()
    // useEffect(() => {
    //     const squareSize = props.chessboardSize * 0.5 * 0.125
    //     const initialRawBoardSquares = []

    //     Array.from(Array(64).keys()).forEach(item => {
    //         const newSquare = {
    //             squareNumber: item,
    //             squareId: positionPieceArray[item][0],
    //             chessPiece: positionPieceArray[item][2],
    //             squareColor: positionPieceArray[item][1]
    //         }
    //         initialRawBoardSquares.push(newSquare)
    //     })
    //     console.log(initialRawBoardSquares)
    //     setRawBoardSquares(initialRawBoardSquares)

    //     // create the initial (starting position) 64 squares list
    //     const initialBoardSquares = rawBoardSquares.map(item => {
    //         return <Newchessboardsquare key={item.squareNumber} squareNumber={item.squareNumber} squareId={item.squareId} chessPiece={item.chessPiece} squareColor={item.squareColor} size={squareSize} />
    //     })
    //     // const [boardSquares, setBoardSquares] = useState(initialBoardSquares)
    //     setBoardSquares(initialBoardSquares)
    // }, [])

    // // update the squares when the move counter changes
    // useEffect(() => {
    //     chessgame.squareChangeOnMove[props.moveCounter].forEach(item => {
    //         const needsUpdateIndex = rawBoardSquares.find(x => x.squareId === item[0]).squareNumber
    //         rawBoardSquares[needsUpdateIndex].chessPiece = item[2]
    //         console.log(item[0])
    //     })
    //     console.log(rawBoardSquares)
    //     const updatedBoardSquares = rawBoardSquares.map(item => {
    //         return <Newchessboardsquare key={item.squareNumber} squareNumber={item.squareNumber} squareId={item.squareId} chessPiece={item.chessPiece} squareColor={item.squareColor} size={squareSize} />
    //     })
    //     setBoardSquares(updatedBoardSquares)
    // }, [props.moveCounter])

    // trying to update a single square, found out that you should use react.memo to check whether the props have been changed
    // and if they are, the square component should update
    // useEffect(() => {
    //     console.log("move changed")
    //     // console.log(boardSquares)
    //     boardSquares[8] = <Newchessboardsquare key={'newsquare'} squareNumber={8} chessPiece={null} squareColor={d} size={props.chessboardSize * 0.5 * 0.125} />
    // }, [props.currentMove > 2 ? true : false])

    // on mount: create initial position boardsquares
    // initialRawBoardSquares = []
    // Array.from(Array(64).keys()).forEach(item => {
    //     const newSquare = {
    //         squareNumber: item,
    //         squareId: positionPieceArray[item][0],
    //         chessPiece: positionPieceArray[item][2],
    //         squareColor: positionPieceArray[item][1]
    //     }
    //     initialRawBoardSquares.push(newSquare)
    // })

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
            {createSquareProp(pieceArray)}
            {`currentmove: ${props.moveCounter}`}
        </div >
    )
}