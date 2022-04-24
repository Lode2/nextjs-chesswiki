import Newchessboardsquare from "./newchessboardsquare";

export default function Newchessboard(props) {
    // const boardSize = props.windowSize > 1000 ? 0.8 * props.windowSize : 800;
    // const currentPos = props.FENNotation;
    const d = 'dark';
    const l = 'light';
    const squareColors = [d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d,];

    const positionPieceArray = fenToComputerNotation(props.FEN)

    // create the 64 squares list
    const boardSquares = Array.from(Array(64).keys()).map(item => {
        return <Newchessboardsquare key={item} squareNumber={item} chessPiece={positionPieceArray[item]} squareColor={squareColors[item]} size={props.chessboardSize * 0.6 * 0.125} />
    })

    function fenToComputerNotation(dirtyFEN) {
        const cleanFEN = dirtyFEN.split(' ')[0].split('/').reverse().join('')
        let posArray = Array(64).fill(null);
        for (let i = 0, j = 0; i < posArray.length; i++, j++) {
            if (isNaN(cleanFEN[j])) {
                // console.log(fenpos[j] + ' is a letter')
                // change notation
                if (cleanFEN[j] === cleanFEN[j].toUpperCase()) {
                    posArray[i] = cleanFEN[j].toLowerCase() + 'w' // white piece
                }
                else {
                    posArray[i] = cleanFEN[j] + 'b' // black piece 
                }
            } else {
                // console.log(fenpos[j] + ' is a number, so skip iterator i by this amount')
                i += parseInt(cleanFEN[j]) - 1
            }
        }
        return posArray
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