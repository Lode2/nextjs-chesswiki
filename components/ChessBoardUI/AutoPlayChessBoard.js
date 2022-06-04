import ChessBoard from "./ChessBoard"
import { useState, useEffect } from 'react'

export default function AutoPlayChessBoard({ boardSize, openingData }) {
    const [moveCounter, setMoveCounter] = useState(0)

    useEffect(() => {
        const countdown = setInterval(() => {
            setMoveCounter((move) => {
                if (move === openingData.moves.length) { return 0 }
                return move + 1
            })
        }, 750)
        return () => { clearInterval(countdown) }
    }, [])

    return (
        <>
            <ChessBoard chessboardSize={boardSize} FEN={openingData.startingPos} theoryMoves={openingData.moves} moveCounter={moveCounter} />
        </>
    )
}
