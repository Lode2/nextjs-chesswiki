import ChessBoard from "./ChessBoard"
import { useState } from 'react'
import { useEffect } from "react"

export default function AutoPlayChessBoard({ boardSize, openingData, inFocus }) {
    const [moveCounter, setMoveCounter] = useState(0)
    useEffect(() => {
        if (!inFocus) {
            setMoveCounter(0)
        }
    }, [inFocus])
    if (inFocus) {
        setTimeout(() => {
            if (inFocus) {
                moveCounter === openingData.moves.length ? setMoveCounter(0) : setMoveCounter(moveCounter + 1)
            }
        }, 1000)
    }

    console.log(moveCounter)
    return (
        <>
            <ChessBoard chessboardSize={boardSize} FEN={openingData.startingPos} theoryMoves={openingData.moves} moveCounter={moveCounter} />
        </>
    )
}
