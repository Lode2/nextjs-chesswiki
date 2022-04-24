import Newchessboard from "./newchessboard"
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'

export default function NewchessboardUI(props) {
    const boardSize = props.chessboardUISize > 1000 ? 0.6 * props.chessboardUISize : 600;
    const [posFEN, setposFEN] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    return (
        <div style={{
            border: 'black 3px solid',
            float: 'right',
            height: 'auto',
            width: boardSize
        }}>

            <div style={{
                display: "flex",
                flexDirection: "row",
                border: 'red 3px solid',
                margin: '5px'

            }}>
                {/*     const startFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
    const startposPieceArray = fenToComputerNotation(startFEN)
    const exampleFEN = 'r1b1k2r/pp1p1ppp/2n1p3/8/2Bb1B2/2n2P2/P2K2PP/7R w kq - 0 15' */}
                <Newchessboard chessboardSize={boardSize} FEN={posFEN} />

                {/* move list */}
                <div style={{
                    width: '30%',
                    border: 'solid 3px orange',
                    margin: '5px',
                    padding: '3px'
                }}>
                    move list
                </div>
            </div>

            {/* actionbar */}
            <div style={{
                border: 'solid 3px green',
                margin: '5px',
                padding: '3px',
                height: boardSize * 0.1
            }}>
                actionbar
                <br></br>
                <Button onClick={() => {
                    // console.log('Update position button hit')
                    setposFEN('r1b1k2r/pp1p1ppp/2n1p3/8/2Bb1B2/2n2P2/P2K2PP/7R w kq - 0 15')
                }} size="small" variant="contained">Update position fen</Button>
            </div>

        </div>
    )
}