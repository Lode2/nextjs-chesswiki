import Chesspiece from "./ChessPiece"

export default function ChessBoardSquare(props) {
    // top if squareId is number, bottom if squareId is string
    const squareIdPosition = {
        display: 'inline', position: "absolute",
        color: props.squareColor === 'light' ? '#a52a2a' : '#f5f5dc', fontSize: props.size / 4
    }
    const numberStyle = { top: '0', left: '0' }
    const letterStyle = { bottom: '0', left: '0' }
    const squareInfo = () => {
        if (props.squareId === undefined) { return '' }
        else if (props.squareId === 'a1') {
            return (
                <>
                    <div style={{
                        display: 'inline', position: "absolute",
                        color: props.squareColor === 'light' ? '#a52a2a' : '#f5f5dc', fontSize: props.size / 4,
                        bottom: '0', left: '0'
                    }}>
                        {props.squareId[0]}
                    </div>
                    <div style={Object.assign(squareIdPosition, numberStyle)}>
                        {props.squareId[1]}
                    </div>
                </>
            )
        }
        else {
            return (
                <div style={Object.assign(squareIdPosition, typeof props.squareId === 'number' ? numberStyle : letterStyle)}>
                    {props.squareId}
                </div>
            )
        }
    }
    return (
        <div style={{
            position: 'relative',
            display: 'block',
            margin: '0',
            width: props.size + 'px',
            height: props.size + 'px',
            backgroundColor: props.squareColor === 'light' ? '#f5f5dc' : '#a52a2a',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            UserSelect: 'none'
        }}>
            {props.chessPiece === null ? '' : <div style={{ display: 'block', margin: '0', position: "absolute", height: props.size + 'px', width: props.size + 'px', zIndex: '3' }}>
                <Chesspiece src={props.chessPiece} size={props.size} />
            </div>}

            {/* the square id on the bottom or top left, only if necessary */}
            {squareInfo()}
        </div>
    )
}