// components
import ChessBoard from "./ChessBoard"
import PositionExplanationCanvas from "./PositionExplanationCanvas"
import MovelistCanvas from "./MoveListCanvas"
import EngineEvalBar from "./EngineEvalBar"
// hooks
import { useState } from 'react'
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep, faBackwardStep, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"
// styles
import styles from '../../styles/layout.module.css'

// stop fontawesome icons from loading in too big
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function NewchessboardUI(props) {
    // console.log('rendering newchessboardui')
    const boardSize = props.chessboardUISize > 1000 ? 0.8 * props.chessboardUISize : 800;
    const [moveCounter, setMoveCounter] = useState(0)

    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'center',
            flexFlow: 'wrap',
            width: '100%',
            height: 'auto',
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexBasis: '100%' }}><h1 style={{ margin: '10px' }}>Queen's pawn opening</h1></div>
            <div style={{ width: '25%', height: 0.5 * boardSize + 'px', margin: '0 0 0 0', padding: '0 0 0 0' }}>
                <PositionExplanationCanvas info={props.openingData.moveInfo} move={moveCounter} />
            </div>
            <div className={styles.evalTooltip} style={{ height: 0.5 * boardSize + 'px', width: '2%' }}>
                <EngineEvalBar evaluation={props.openingData.moveEval} move={moveCounter}></EngineEvalBar>
                <span className={styles.tooltipText}>{props.openingData.evalInfo[moveCounter] !== undefined ? props.openingData.evalInfo[moveCounter] : 'No engine evaluation data'}</span>
            </div>
            <div style={{ width: 0.5 * boardSize + 'px', margin: '0 0 40px 0', }}>
                <ChessBoard chessboardSize={boardSize} FEN={props.openingData.startingPos} theoryMoves={props.openingData.moves} moveCounter={moveCounter} />
                <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center' }}>
                    <button className={styles.faButton} onClick={() => { setMoveCounter(0) }}>
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </button>
                    <button className={styles.faButton} onClick={() => { setMoveCounter(moveCounter > 0 ? (moveCounter - 1) : (moveCounter)) }}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <button className={styles.faButton} onClick={() => { setMoveCounter(moveCounter < (props.openingData.moves.length) ? (moveCounter + 1) : moveCounter) }}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                    <button className={styles.faButton} onClick={() => { setMoveCounter(props.openingData.moves.length) }}>
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>
                </div>
            </div>
            <div style={{ width: '18%', height: 0.5 * boardSize + 'px', margin: '0 0 0 0', backgroundColor: 'rgb(116, 105, 105)' }}>
                <MovelistCanvas moveList={props.openingData.moves} currentCounter={moveCounter} changeCounter={setMoveCounter} />
                {/* {Math.floor(Math.random() * 11)} */}
            </div>


            {/* next divs for testing purposes */}
            {/* <div style={{ display: 'flex', flexBasis: '100%' }}>
                <input type="text" id="startingpos"></input>
                <input type="text" id="theorymoves"></input>
                <button onClick={() => {
                    console.log(startingpos.value, theorymoves.value)
                    setposFEN(startingpos.value)
                    setposMoves(makePosMovesList(theorymoves.value))
                    setMoveCounter(0)
                }}>Load new position</button>
            </div>
            <div style={{ display: 'flex', flexBasis: '100%' }}>
                `1. d4 Nc6 2. Bf4 Nxd4 3. Qxd4 a5 4. e4 a4 5. Nf3 Nh6 6. Nc3 f6 7. Bxh6 gxh6 8.
                Bd3 e5 9. Nxe5 fxe5 10. Qxe5+ Qe7 11. Qxh8 c6 12. O-O-O Qg7 13. Qxg7 Bxg7 14.
                Rhe1 Bd4 15. Ne2 Bxf2 16. Rf1 Be3+ 17. Kb1 d6 18. Rf3 Bg5 19. Rdf1 a3 20. Rf8+
                Kd7 21. bxa3 Be7 22. R1f7 h5 23. Nd4 Ra5 24. Nf5 Re5 25. Nxe7 Rxe7 26. Rxe7+
                Kxe7 27. Rxc8 Kf6 28. Rc7 h4 29. Rxb7 h6 30. Rh7 Ke5 31. Rxh6 Kf4 32. Rxh4+ Kg5
                33. Rh7 Kf4 34. Rf7+ Kg5 35. Rf5+ Kg6 36. Ba6 Kg7 37. Bb7 Kh6 38. Bxc6 Kh7 39.
                g4 Kg6 40. e5 dxe5 41. Rxe5 Kh6 42. Rf5 Kg7 43. h4 Kh7 44. h5 Kh6 45. Be8 Kg7
                46. g5 Kh7 47. Kc1 Kg8 48. Kd2 Kh7 49. Ke3 Kg7 50. Kf4 Kh7 51. Kg4 Kg8 52. h6
                Kh7 53. Kh5 Kh8 54. g6 Kg8 55. Kg5 Kh8 56. Rf8`
                <br></br>
                'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
            </div> */}
        </div>
    )
}

function makePosMovesList(str) {
    // split the moves into a list by recognizing the types of chess moves, credit: https://8bitclassroom.com/2020/08/16/chess-in-regex/
    return str.match(/[O](-[O]){1,2}|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](\=[QRBN])?[+#]?/g)
}