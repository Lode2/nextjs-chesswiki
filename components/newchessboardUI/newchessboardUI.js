import Newchessboard from "./newchessboard"
import Positionexplanationcanvas from "./positionexplanationcanvas"
import Movelistcanvas from "./movelistcanvas"
import Button from '@mui/material/Button';
import { useState, useRef } from 'react'

export default function NewchessboardUI(props) {
    // console.log('rendering newchessboardui')
    const boardSize = props.chessboardUISize > 1000 ? 0.8 * props.chessboardUISize : 800;
    const [posFEN, setposFEN] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    const [posMoves, setposMoves] = useState('1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *')
    const [moveCounter, setMoveCounter] = useState(0)
    const moveList = useRef([])
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
                <Newchessboard chessboardSize={boardSize} FEN={posFEN} theoryMoves={posMoves} moveCounter={moveCounter} moveListRef={moveList} />
                <div>
                    <Button onClick={() => {
                        setMoveCounter(moveCounter > 0 ? (moveCounter - 1) : (moveCounter))
                    }} size="small" variant="contained">Previous move</Button>
                    <Button onClick={() => {
                        setMoveCounter(moveCounter < (moveList.current.length) ? (moveCounter + 1) : moveCounter)
                    }} size="small" variant="contained">Next move</Button>
                </div>
            </div>
            <div style={{
                width: '15%',
            }}>
                Move history
                <br></br>
                <Movelistcanvas moveList={moveList.current} currentCounter={moveCounter} changeCounter={setMoveCounter} />
                {/* {Math.floor(Math.random() * 11)} */}
            </div>
        </div>
    )
}