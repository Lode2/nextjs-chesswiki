import Newchessboardsquare from "./newchessboardsquare";

export default function Newchessboard(props) {
    const boardSize = 0.6 * props.windowSize;
    // const currentPos = props.FENNotation;
    const d = 'dark';
    const l = 'light';
    const squareColors = [d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d,];

    // create the 64 squares list
    const boardSquares = Array.from(Array(64).keys()).map(item => {
        return <Newchessboardsquare key={item} squareNumber={item} chessPiece={'Q'} squareColor={squareColors[item]} size={boardSize * 0.6 * 0.125} />
    })

    function fenToComputerNotation(pos) {
        return pos
    }

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
                {/* chessboard */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap-reverse",
                    width: '80%',
                    height: 'auto'
                }}>
                    {boardSquares}
                </div >

                {/* move list */}
                <div style={{
                    width: '40%',
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