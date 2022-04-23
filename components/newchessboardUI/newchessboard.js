import Newchessboardsquare from "./newchessboardsquare";

export default function Newchessboard(props) {
    // const boardSize = props.windowSize > 1000 ? 0.8 * props.windowSize : 800;
    // const currentPos = props.FENNotation;
    const d = 'dark';
    const l = 'light';
    const squareColors = [d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d,];

    // create the 64 squares list
    const boardSquares = Array.from(Array(64).keys()).map(item => {
        return <Newchessboardsquare key={item} squareNumber={item} chessPiece={'Q'} squareColor={squareColors[item]} size={props.chessboardSize * 0.6 * 0.125} />
    })

    function fenToComputerNotation(pos) {
        return pos
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: '70%',
            height: 'auto'
        }}>
            {boardSquares}
        </div >
    )
}