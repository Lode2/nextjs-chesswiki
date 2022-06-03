import AutoPlayChessBoard from '../../components/ChessBoardUI/AutoPlayChessBoard'
import { useState } from 'react'

export default function autoplayboard() {
    const data = {
        startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        moves: ['e4', 'Nf6', 'e5', 'd5', 'exd6', 'e6', 'Bd3', 'Be7', 'Nf3', 'O-O', 'O-O',],
    }

    return (
        <>
            <AutoPlayChessBoard boardSize={50} openingData={data} />
        </>
    )
}