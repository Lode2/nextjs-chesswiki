import { useState, useEffect, useMemo } from "react";
import Newchessboardsquare from "./newchessboardsquare";
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const newFEN = '7R/Bk2n3/5p1p/p5pb/5P1b/1P2P1P1/P6K/8 w - - 2 40'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

const chessgame = new Chessgame(exampleFEN, moves)
chessgame.loadOpening()
const startingPos = chessgame.getPosition()

export default function Newchessboard(props) {
    const squareSize = props.chessboardSize * 0.5 * 0.125
    const [pieceArray, setPieceArray] = useState(startingPos)
    const [boardSquares, setBoardSquares] = useState(createSquareProp(startingPos))
    const [moveCounter, setMoveCounter] = useState(props.moveCounter)
    const [needsUpdatingIndex, setNeedsUpdatingIndex] = useState()

    // Use pieceArray to find the difference in the position between the current position and the previous one.
    // Next, for setBoardSquares, only replace the values that need replacing.
    useEffect(() => {
        setMoveCounter(moveCounterDirection)
        const currentPosArray = chessgame.positionArray
        // setPieceArray(currentPosArray)
        setPieceArray(findNeedsUpdatingIndex(currentPosArray))
        setBoardSquares(updateBoardSquares(needsUpdatingIndex, currentPosArray))
        // const renderedPos = createSquareProp(currentPosArray)
        // const renderedPos = useMemo(() => createSquareProp(currentPosArray), [currentPosArray])
        // setBoardSquares(renderedPos)
    }, [props.moveCounter])

    function updateBoardSquares(index, pos) {
        let list = [...boardSquares]
        if (index === undefined) {
            return list
        }
        index.forEach((item) => {
            let target = [...list[item]]
            target = createSingleSquareProp(pos[item])
            list[item] = target
        })

        return list
    }

    function createSingleSquareProp(rawItem) {
        return <Newchessboardsquare key={rawItem.index} squareNumber={rawItem.index} squareId={rawItem.squareId} chessPiece={rawItem.chessPiece} squareColor={rawItem.squareColor} size={squareSize} />
    }

    function moveCounterDirection() {
        if (moveCounter < props.moveCounter) {
            chessgame.nextMove(props.moveCounter - 1)
        } else {
            chessgame.previousMove(props.moveCounter)
        }
        return props.moveCounter
    }

    function findNeedsUpdatingIndex(newArray) {
        let difference = newArray.filter(x => !pieceArray.includes(x));
        difference.map((item) => {
            return newArray.indexOf(item)
        })
        setNeedsUpdatingIndex(difference)
        return newArray
    }

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
            {boardSquares}
            {`currentmove: ${props.moveCounter}`}
        </div >
    )
}