import { useEffect } from "react";
import Newchessboardsquare from "./newchessboardsquare";

export default function Newchessboard(props) {
    const d = 'dark';
    const l = 'light';
    const squareColors = [d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d, d, l, d, l, d, l, d, l, l, d, l, d, l, d, l, d,];

    const positionPieceArray = fenToComputerNotation(props.FEN)

    // create the 64 squares list
    const boardSquares = Array.from(Array(64).keys()).map(item => {
        return <Newchessboardsquare key={item} squareNumber={item} chessPiece={positionPieceArray[item]} squareColor={squareColors[item]} size={props.chessboardSize * 0.5 * 0.125} />
    })

    // trying to update a single square, found out that you should use react.memo to check whether the props have been changed
    // and if they are, the square component should update
    // useEffect(() => {
    //     console.log("move changed")
    //     // console.log(boardSquares)
    //     boardSquares[8] = <Newchessboardsquare key={'newsquare'} squareNumber={8} chessPiece={null} squareColor={d} size={props.chessboardSize * 0.5 * 0.125} />
    // }, [props.currentMove > 2 ? true : false])

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.chessboardSize * 0.5,
            height: 'auto'
        }}>
            {boardSquares}
        </div >
    )
}

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


// `1. e4 d5 2. Nc3 d4 3. Nd5 e6 4. Nf4 e5 5. Nfe2 Qd6 6. c3 Na6 7. cxd4 Ne7 8. b3
//                         Kd8 9. Bb2 b6 10. Nf3 f6 11. d5 c5 12. g3 Nb8 13. Bg2 g5 14. O-O b5 15. h4 a6
//                         16. hxg5 Rg8 17. Nh4 Ke8 18. Nf5 Nxf5 19. exf5 Kf7 *`
function moveToNewFEN(oldFEN, move) {
    if (move[0].lowercase === move[0]) {
        // pawn move
    } else {
        switch (move[0]) {
            case 'N': return 'knight'
            case 'B': return 'bishop'
            case 'R': return 'rook'
            case 'Q': return 'queen'
            case 'K': return 'king'
        }
        // piece move
    }
    return newFEN
}