import Chesspiece from "./chesspiece"

export default function Newchessboardsquare(props) {
    return (
        <div style={{
            position: 'relative',
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'dark' ? '#a52a2a' : '#f5f5dc',
        }}>
            <div style={{ position: "absolute", }}>
                {props.chessPiece === null ? '' : <Chesspiece src={props.chessPiece} size={props.size} />}
            </div>

            {/* the square id on the bottom left */}
            <div style={{
                position: "absolute",
                bottom: 0,
                // color: 'darkblue',
                backgroundImage: "linear-gradient(to left, indigo, blue, green, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent"
            }}>
                {props.squareNumber}
                {/* Dit random getal zorgt voor problemen: de server en client vinden verschillende waarden */}
                {/* dit betekent dat dit twee keer wordt gerund wat niet goed is */}
                {/* {Math.floor(Math.random() * 11)} */}
            </div>
        </div>
    )
}