import Newchessboard from "./newchessboard"

export default function NewchessboardUI(props) {
    return (
        <div>
            {props.chessPiece ? props.chessPiece : 'no piece'}
            {/* <br></br> */}
            {props.squareNumber}
            <Newchessboard FENNotation={props.FENNotation} interactive={props.interactive} windowSize={props.windowSize != undefined ? props.windowSize : 1280} />
        </div >
    )
}