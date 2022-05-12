import Newchessboard from "./newchessboard"
import Positionexplanationcanvas from "./positionexplanationcanvas"
import Movelistcanvas from "./movelistcanvas"
import { Button, TextField } from "@mui/material"
import { useState, useRef } from 'react'

export default function NewchessboardUI(props) {
    // console.log('rendering newchessboardui')
    const boardSize = props.chessboardUISize > 1000 ? 0.8 * props.chessboardUISize : 800;
    const [posFEN, setposFEN] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    const [posMoves, setposMoves] = useState(makePosMovesList('1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'))
    const [moveCounter, setMoveCounter] = useState(0)
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
    const inputPosRef = useRef()
    const inputMovesRef = useRef()

    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            marginLeft: '75px',
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
                <Newchessboard chessboardSize={boardSize} FEN={posFEN} theoryMoves={posMoves} moveCounter={moveCounter} />
                <div>
                    <Button onClick={() => {
                        setMoveCounter(moveCounter > 0 ? (moveCounter - 1) : (moveCounter))
                    }} size="small" variant="contained">Previous move</Button>
                    <Button onClick={() => {
                        setMoveCounter(moveCounter < (posMoves.length) ? (moveCounter + 1) : moveCounter)
                    }} size="small" variant="contained">Next move</Button>
                    <br></br>
                    <TextField sx={{ input: { color: 'white' }, label: { color: 'white' } }} inputRef={inputPosRef} id="outlined-basic" label="Starting position" variant="outlined" />
                    <TextField sx={{ input: { color: 'white' }, label: { color: 'white' } }} inputRef={inputMovesRef} id="outlined-basic" label="Theory moves" variant="outlined" />
                    <br></br>
                    <Button onClick={() => {
                        console.log(inputPosRef.current.value, inputMovesRef.current.value)
                        setposFEN(inputPosRef.current.value)
                        setposMoves(makePosMovesList(inputMovesRef.current.value))
                        setMoveCounter(0)
                    }} size="small" variant="contained">Load new position</Button>
                </div>
                `1. d4 Nc6 2. Bf4 Nxd4 3. Qxd4 a5 4. e4 a4 5. Nf3 Nh6 6. Nc3 f6 7. Bxh6 gxh6 8.
                Bd3 e5 9. Nxe5 fxe5 10. Qxe5+ Qe7 11. Qxh8 c6 12. O-O-O Qg7 13. Qxg7 Bxg7 14.
                Rhe1 Bd4 15. Ne2 Bxf2 16. Rf1 Be3+ 17. Kb1 d6 18. Rf3 Bg5 19. Rdf1 a3 20. Rf8+
                Kd7 21. bxa3 Be7 22. R1f7 h5 23. Nd4 Ra5 24. Nf5 Re5 25. Nxe7 Rxe7 26. Rxe7+
                Kxe7 27. Rxc8 Kf6 28. Rc7 h4 29. Rxb7 h6 30. Rh7 Ke5 31. Rxh6 Kf4 32. Rxh4+ Kg5
                33. Rh7 Kf4 34. Rf7+ Kg5 35. Rf5+ Kg6 36. Ba6 Kg7 37. Bb7 Kh6 38. Bxc6 Kh7 39.
                g4 Kg6 40. e5 dxe5 41. Rxe5 Kh6 42. Rf5 Kg7 43. h4 Kh7 44. h5 Kh6 45. Be8 Kg7
                46. g5 Kh7 47. Kc1 Kg8 48. Kd2 Kh7 49. Ke3 Kg7 50. Kf4 Kh7 51. Kg4 Kg8 52. h6
                Kh7 53. Kh5 Kh8 54. g6 Kg8 55. Kg5 Kh8 56. Rf8`
                'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
            </div>
            <div style={{
                width: '15%',
            }}>
                Move history
                <br></br>
                <Movelistcanvas moveList={posMoves} currentCounter={moveCounter} changeCounter={setMoveCounter} />
                {/* {Math.floor(Math.random() * 11)} */}
            </div>
        </div>
    )
}

function makePosMovesList(str) {
    // split the moves by recognizing the types of chess moves, credit: https://8bitclassroom.com/2020/08/16/chess-in-regex/
    return str.match(/[O](-[O]){1,2}|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](\=[QRBN])?[+#]?/g)
}