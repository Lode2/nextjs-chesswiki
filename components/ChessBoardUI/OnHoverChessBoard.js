import AutoPlayChessBoard from "./AutoPlayChessBoard"
import styles from '../../styles/chessBoardOnHover.module.css'
import { useState } from 'react'

// component that has a div where if you hover over it, it renders a chessboard in a popup that automatically plays moves
export default function OnHoverChessBoard(props) {
    const [focus, setFocus] = useState(false)
    const board = () => {
        if (focus) {
            return (
                <span className={styles.tooltipText}>
                    <AutoPlayChessBoard boardSize={props.boardSize} openingData={props.moveData} inFocus={true} />
                </span>
            )
        } else {
            return ''
        }
    }
    return (
        <>
            <div className={styles.evalWrapper} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
                {props.hoverMeElement}
                {board()}
            </div>
        </>
    )
}
