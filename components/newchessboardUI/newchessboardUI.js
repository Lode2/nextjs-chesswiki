import Newchessboard from "./newchessboard"
import Positionexplanationcanvas from "./positionexplanationcanvas"
import Movelistcanvas from "./movelistcanvas"
import Button from '@mui/material/Button';
import { useState, useReducer } from 'react'

export default function NewchessboardUI(props) {
    const boardSize = props.chessboardUISize > 1000 ? 0.8 * props.chessboardUISize : 800;
    const [posFEN, setposFEN] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    const [posMoves, setposMoves] = useState(``)
    const [moveCounter, setMoveCounter] = useState(0)
    const amountOfMoves = 11
    const [moveList, setMoveList] = useState('')
    const positionInformation = ["1. e4, one of the most common opening moves.",
        "Nf6 is not the most common responce.",
        "2. e5, attacking the knight.",
        "The knight remains under attack.",
        "3. exd6, white captures en passant.",
        "Black pushes the e pawn.",
        "White developes its first piece, the white squared bishop.",
        "Black responds by also developing a bishop.",
        "5. Nf3 by white.",
        "Black short-castles its king to safety.",
        "White follows black's lead, and castles short.",]
    // console.log(moveList)

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
            }}>
                <b>Position explanation canvas</b>
                <Positionexplanationcanvas info={positionInformation} move={moveCounter} />
            </div>
            <div style={{
                width: '50%',
            }}>
                <Newchessboard chessboardSize={boardSize} FEN={posFEN} theoryMoves={posMoves} moveCounter={moveCounter} updateMoveList={setMoveList} />
                <div>
                    {/* <Button onClick={() => {
                        setposFEN('r1b1k2r/pp1p1ppp/2n1p3/8/2Bb1B2/2n2P2/P2K2PP/7R w kq - 0 15')
                    }} size="small" variant="contained">Update position fen</Button>
                    <Button onClick={() => {
                        setposFEN(`rnb2br1/5k1p/p2q1p2/1ppPpPP1/8/1P4P1/PB1PNPB1/R2Q1RK1 w - - 1 20`)
                        setposMoves(`1. e4 d5 2. Nc3 d4 3. Nd5 e6 4. Nf4 e5 5. Nfe2 Qd6 6. c3 Na6 7. cxd4 Ne7 8. b3
                        Kd8 9. Bb2 b6 10. Nf3 f6 11. d5 c5 12. g3 Nb8 13. Bg2 g5 14. O-O b5 15. h4 a6
                        16. hxg5 Rg8 17. Nh4 Ke8 18. Nf5 Nxf5 19. exf5 Kf7 *`)
                    }} size="small" variant="contained">Use pos with move history</Button>
                    <Button onClick={() => {
                        // loadPos(Chess, `rnb2br1/5k1p/p2q1p2/1ppPpPP1/8/1P4P1/PB1PNPB1/R2Q1RK1 w - - 1 20`, `1. e4 d5 2. Nc3 d4 3. Nd5 e6 4. Nf4 e5 5. Nfe2 Qd6 6. c3 Na6 7. cxd4 Ne7 8. b3
                        // Kd8 9. Bb2 b6 10. Nf3 f6 11. d5 c5 12. g3 Nb8 13. Bg2 g5 14. O-O b5 15. h4 a6
                        // 16. hxg5 Rg8 17. Nh4 Ke8 18. Nf5 Nxf5 19. exf5 Kf7 *`)
                        console.log(chess)
                    }} size="small" variant="contained">chess.js pos load</Button><br></br> */}
                    <Button onClick={() => {
                        setMoveCounter(moveCounter > 0 ? (moveCounter - 1) : (moveCounter))
                    }} size="small" variant="contained">Previous move</Button>
                    <Button onClick={() => {
                        setMoveCounter(moveCounter < (amountOfMoves) ? (moveCounter + 1) : moveCounter)
                    }} size="small" variant="contained">Next move</Button>
                </div>
            </div>
            <div style={{
                width: '15%',
            }}>
                Move history
                <br></br>
                <Movelistcanvas moveList={moveList} changeCounter={setMoveCounter} />
                {/* {Math.floor(Math.random() * 11)} */}
            </div>
        </div>
    )
}