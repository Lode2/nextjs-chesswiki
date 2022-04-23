export default function Newchessboardsquare(props) {
    const squareSize = 50;
    const boardSquares = props.FENNotation;

    function fenToComputerNotation(pos) {
        return pos
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'dark' ? 'brown' : 'yellow',
            // border: '2px black solid',
            // margin: '5px'
        }}>
            {props.chessPiece ? props.chessPiece : 'no piece'}
            {/* <br></br> */}
            {props.squareNumber}
        </div >
    )
}