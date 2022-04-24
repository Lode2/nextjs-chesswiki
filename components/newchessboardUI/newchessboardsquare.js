import Chesspiece from "./chesspiece"

export default function Newchessboardsquare(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'dark' ? '#a52a2a' : '#f5f5dc',
            // border: '2px black solid',
            // margin: '5px'
        }}>
            {/* place a piece image if there is a piece on this square */}
            {props.chessPiece === null ? '' : <Chesspiece src={props.chessPiece} size={props.size} />}
            {props.squareNumber}
        </div >
    )
}