import { useState, useMemo } from 'react'

export default function Movelistcanvas(props) {
    const [oldListLength, setOldListLength] = useState(0)
    let newList = []
    const buttonStyle = { all: 'unset', cursor: 'pointer', borderRadius: '3px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }
    // add condition that it only updates when previous value is smaller than the new one in case the user wants to go back a move
    // this condition will make it so that the moves that have been made up until then will remain there.
    console.log(`oldlistlength is: ${oldListLength}, props.moveList.length is: ${props.moveList.length}`)
    if (props.moveList.length !== 0 && oldListLength < props.moveList.length) {
        newList = props.moveList.map((item, index) => {
            // console.log(index)
            if (index % 2 !== 0) {
                return <span style={{ width: 'auto', heigth: 'auto' }} key={`moveList ${index}`}>
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                    {'\n'}
                </span>
            } else {
                return <span style={{ width: 'auto', heigth: 'auto' }} key={`moveList ${index}`}>
                    {(index / 2) + 1 + '.'}
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                </span>
            }
        })
        // setOldListLength(props.moveList.length)
    }

    const changeMove = (moveNr) => {
        console.log(moveNr + 1)
        props.changeCounter(moveNr)
    }

    function mouseEnter(event) {
        event.target.style.background = 'gray';
        event.target.style.borderRadius = '5px'
    }

    function mouseLeave(event) {
        event.target.style.background = 'white';
    }

    return (
        <div style={{ whiteSpace: 'pre-line' }}>{newList}</div>
    )
}
