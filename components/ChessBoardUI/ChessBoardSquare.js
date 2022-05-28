import Chesspiece from "./ChessPiece"

export default function ChessBoardSquare(props) {
    // top if squareId is number, bottom if squareId is string
    const squareIdPosition = typeof props.squareId === 'number' ? { top: '0' } : { bottom: '0' }
    return (
        <div style={{
            position: 'relative',
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'light' ? '#f5f5dc' : '#a52a2a',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            UserSelect: 'none'
        }}>
            <div style={{ position: "absolute", height: props.size, width: props.size }}>
                {props.chessPiece === null ? '' : <Chesspiece src={props.chessPiece} size={props.size} />}
            </div>

            {/* the square id on the bottom or top left, only if necessary */}
            {props.squareId === undefined ? '' :
                <div style={Object.assign({ position: "absolute", color: props.squareColor === 'light' ? '#a52a2a' : '#f5f5dc' }, squareIdPosition)}>
                    {props.squareId}
                </div>
            }

        </div>
    )
}