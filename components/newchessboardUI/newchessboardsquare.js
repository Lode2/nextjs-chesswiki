import Chesspiece from "./chesspiece"

export default function Newchessboardsquare(props) {
    return (
        <div style={{
            // display: "flex",
            // flexDirection: "row",
            // flexWrap: "wrap-reverse",
            position: 'relative',
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'dark' ? '#a52a2a' : '#f5f5dc',
        }}>
            {/* place a piece image if there is a piece on this square */}
            <div style={{ position: "absolute", }}>
                {props.chessPiece === null ? '' : <Chesspiece src={props.chessPiece} size={props.size} />}
            </div>
            <div style={{
                position: "absolute",
                bottom: 0,
                // color: 'darkblue',
                backgroundImage: "linear-gradient(to left, indigo, blue, green, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent"
            }}>
                {props.squareNumber}
            </div>

        </div >
    )
}