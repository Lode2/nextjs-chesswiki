import AutoPlayChessBoard from '../../components/ChessBoardUI/AutoPlayChessBoard'
import { useState } from 'react'

export default function autoplayboard() {
    const data = {
        startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        moves: ['e4', 'Nf6', 'e5', 'd5', 'exd6', 'e6', 'Bd3', 'Be7', 'Nf3', 'O-O', 'O-O',],
    }
    const [focus, setFocus] = useState(true)

    return (
        <>
            <button onClick={() => { setFocus(focus === true ? false : true) }}>Toggle whether the board should update or not (simulating if in focus or not)</button>
            <AutoPlayChessBoard boardSize={800} openingData={data} inFocus={focus} />
        </>
    )
}
