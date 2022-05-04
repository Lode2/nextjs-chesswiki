import { memo } from 'react'
import Image from 'next/image'

function Chesspiece(props) {
    // console.log(props.size)
    const imgsrc = '/images/' + props.src + '.png';
    const pieceName = (props.src[1] === 'b' ? 'black' : 'white') + ' ' + shorthandToPieceName(props.src[0]);
    return (
        <>
            <Image src={imgsrc} alt={pieceName} width={props.size} height={props.size} />
        </>
    )
}

function shorthandToPieceName(shorthand) {
    switch (shorthand) {
        case 'p': return 'pawn'
        case 'n': return 'knight'
        case 'b': return 'bishop'
        case 'r': return 'rook'
        case 'q': return 'queen'
        case 'k': return 'king'
    }
}

function areEqual() {
    return true
}

// export default memo(Chesspiece, areEqual)
export default Chesspiece
