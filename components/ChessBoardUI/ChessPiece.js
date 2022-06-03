import Image from 'next/image'

export default function ChessPiece(props) {
    const imgsrc = '/images/' + props.src + '.png';
    const pieceName = (props.src[1] === 'b' ? 'black' : 'white') + ' ' + shorthandToPieceName(props.src[0]);
    return (
        <div style={{ position: 'relative', height: props.size }}>
            <Image src={imgsrc} alt={pieceName} layout='fill' />
        </div>
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