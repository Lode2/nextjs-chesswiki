import { useState, useRef, useMemo } from 'react'

export default function Movelistcanvas(props) {
    console.log('rendering movelistcanvas')
    const oldListLength = useRef(0)

    const buttonStyle = { all: 'unset', cursor: 'pointer', borderRadius: '5px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }

    // the list of styled moves remains the same for the entire game, until another game is loaded, so memoize
    const newList = useMemo(() => createStyledMoveList(props.moveList), [props.moveList])

    let useList = [...newList]

    // find until what move the list should be displayed
    if (props.currentCounter > oldListLength.current) {
        useList = newList.slice(0, props.currentCounter)
        oldListLength.current = props.currentCounter
    } else {
        useList = newList.slice(0, oldListLength.current)
    }

    function createStyledMoveList(list) {
        if (list.length === 0) {
            return []
        }
        const styledList = list.map((item, index) => {
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
        return styledList
    }

    const changeMove = (moveNr) => {
        console.log(moveNr + 1)
        props.changeCounter(moveNr + 1)
    }

    function mouseEnter(event) {
        event.target.style.background = 'gray';
    }

    function mouseLeave(event) {
        event.target.style.background = 'white';
    }

    return (
        <div style={{ whiteSpace: 'pre-line' }}>{useList}</div>
    )
}
