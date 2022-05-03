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
    // Use pieceArray to find the difference in the position between the current position and the previous one.
    // Next, for setBoardSquares, only replace the values that need replacing.
    useEffect(() => {
        setMoveCounter(moveCounterDirection)
        const currentPosArray = chessgame.positionArray
        // const renderedPos = createSquareProp(currentPosArray)
        // setBoardSquares(renderedPos)

        // so here we have the old pos: pieceArray, and the new pos: currentPosArray
        // we want to update boardSquares only with the squares that changed

        // PLAN:
        // 1. find the squares that change between old and new pos
        // 2. render these squares using the square component
        // 3. update boardSquares with the new items for the 

        const changedSquares = arrayDiff(currentPosArray, pieceArray)
        console.log(changedSquares)
        if (changedSquares.length === 0) {
            console.log('no changes')
            const renderedPos = createSquareProp(currentPosArray)
            setBoardSquares(renderedPos)
        }
        else {
            console.log('yes changes')
            const renderedChangedSquares = createSquareProp(changedSquares)
            console.log(renderedChangedSquares)
            setBoardSquares(updateChangedSquares(renderedChangedSquares))
        }

        // setPieceArray(currentPosArray)
        // setPieceArray(squareNeedsUpdating(currentPosArray))

    }, [props.moveCounter])

    function arrayDiff(arrayA, arrayB) {
        let diff = []
        for (let i = 0; i < arrayA.length; i++) {
            if (!(arrayA[i].chessPiece === arrayB[i].chessPiece)) {
                diff.push(arrayA[i])
            }
        }
        return diff
    }

    function updateChangedSquares(changedSquares) {
        // 1. Make a shallow copy of the items
        let items = [...boardSquares];
        changedSquares.forEach((square) => {
            // 2. Make a shallow copy of the item you want to mutate
            let item = { ...items[square.props.squareNumber] };
            console.log(item)
            // 3. Replace the property you're intested in
            item = square;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            items[square.props.squareNumber] = item;
        })

        return items
    }

    function moveCounterDirection() {
        if (moveCounter < props.moveCounter) {
            chessgame.nextMove(props.moveCounter - 1)
        } else {
            chessgame.previousMove(props.moveCounter)
        }
        return props.moveCounter
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