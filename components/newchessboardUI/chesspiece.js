import Image from 'next/image'

export default function Chesspiece(props) {
    const imgsrc = '/images/' + props.src + '.png';
    const pieceName = (props.src[0] === 'b' ? 'black' : 'white') + ' ' + shorthandToPieceName(props.src[1]);

    function shorthandToPieceName(shorthand) {
        if (shorthand === 'p') { return 'pawn' }
        else if (shorthand === 'n') { return 'knight' }
        else if (shorthand === 'b') { return 'bishop' }
        else if (shorthand === 'r') { return 'rook' }
        else if (shorthand === 'q') { return 'queen' }
        else { return 'king' }

    }

    return (
        <>
            <Image src={imgsrc} alt={pieceName} width={props.size} height={props.size} />
        </>
    )
}
