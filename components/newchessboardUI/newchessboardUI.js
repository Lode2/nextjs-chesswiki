import Newchessboard from "./newchessboard"
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'

export default function NewchessboardUI(props) {
    const boardSize = props.chessboardUISize > 1000 ? 0.8 * props.chessboardUISize : 800;
    const [posFEN, setposFEN] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    const [posMoves, setposMoves] = useState(``)
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            // border: 'black 3px solid',
            float: 'right',
            width: boardSize,
            height: 'auto',
        }}>
            <div style={{
                width: '35%',
            }}>explanation</div>
            <div style={{
                width: '50%',
            }}>
                <Newchessboard chessboardSize={boardSize} FEN={posFEN} theoryMoves={posMoves} />
                <div>
                    <Button onClick={() => {
                        // console.log('Update position button hit')
                        setposFEN('r1b1k2r/pp1p1ppp/2n1p3/8/2Bb1B2/2n2P2/P2K2PP/7R w kq - 0 15')
                    }} size="small" variant="contained">Update position fen</Button>
                    <Button onClick={() => {
                        // console.log('Update position button hit')
                        setposFEN(`rnb2br1/5k1p/p2q1p2/1ppPpPP1/8/1P4P1/PB1PNPB1/R2Q1RK1 w - - 1 20`)
                        setposMoves(`1. e4 d5 2. Nc3 d4 3. Nd5 e6 4. Nf4 e5 5. Nfe2 Qd6 6. c3 Na6 7. cxd4 Ne7 8. b3
                        Kd8 9. Bb2 b6 10. Nf3 f6 11. d5 c5 12. g3 Nb8 13. Bg2 g5 14. O-O b5 15. h4 a6
                        16. hxg5 Rg8 17. Nh4 Ke8 18. Nf5 Nxf5 19. exf5 Kf7 *`)
                    }} size="small" variant="contained">Use new position with move history</Button>
                </div>
            </div>
            <div style={{
                width: '15%',
            }}>move history</div>
        </div>
    )
}