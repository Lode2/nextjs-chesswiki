import Newchessboard from "./newchessboard"

export default function NewchessboardUI(props) {
    const boardSize = props.chessboardUISize > 1000 ? 0.6 * props.chessboardUISize : 600;
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

                <Newchessboard chessboardSize={boardSize} />

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
            </div>

        </div>
    )
}