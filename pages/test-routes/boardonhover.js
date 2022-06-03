import AutoPlayChessBoard from "../../components/ChessBoardUI/AutoPlayChessBoard"
import styles from '../../styles/chessBoardOnHover.module.css'
import { useState } from 'react'
import OnHoverChessBoard from "../../components/ChessBoardUI/OnHoverChessBoard"

export default function boardonhover() {
    const data = {
        startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        moves: ['e4', 'Nf6', 'e5', 'd5', 'exd6', 'e6', 'Bd3', 'Be7', 'Nf3', 'O-O', 'O-O',],
    }
    const [focus, setFocus] = useState(false)

    return (
        <>
            <OnHoverChessBoard data={data} boardSize={25} hoverMeElement={
                <div style={{ width: '200px', height: '200px', backgroundColor: 'green' }}>Hover me for chessboard</div>
            } />
        </>
    )
}
