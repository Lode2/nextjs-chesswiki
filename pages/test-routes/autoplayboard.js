import AutoPlayChessBoard from '../../components/ChessBoardUI/AutoPlayChessBoard'
import { useState } from 'react'

export default function autoplayboard() {
    const data = {
        startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        moves: ['e4', 'Nf6', 'e5', 'd5', 'exd6', 'e6', 'Bd3', 'Be7', 'Nf3', 'O-O', 'O-O',],
    }
    const [focus, setFocus] = useState(true)

    return (
        <>
            <button onClick={() => { setFocus(focus === true ? false : true) }}>Toggle board</button>
            <div className='boardwrapper' style={{ height: '400px', width: '400px', border: '2px solid red', visibility: 'visible' }}>
                <AutoPlayChessBoard boardSize={780} openingData={data} inFocus={focus} />
            </div>
        </>
    )
}
function myFunction() {
    // console.log(e)
    // e.currentTarget.style.height = e.currentTarget.style.height === '100px' ? '10px' : '100px'
    // e.currentTarget.style.width = e.currentTarget.style.width === '100px' ? '10px' : '100px'
    e.currentTarget.style.visibility = 'hidden'
}
