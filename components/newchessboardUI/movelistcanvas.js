import { borderRadius, padding } from '@mui/system'
import { useCallback } from 'react'

export default function Movelistcanvas(props) {
    let newList = []
    const buttonStyle = { all: 'unset', cursor: 'pointer', borderRadius: '3px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }

    if (props.moveList.length !== 0) {
        newList = props.moveList.map((item, index) => {
            // console.log(index)
            if (index % 2 !== 0) {
                return <>
                    {/* {' '} */}
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                    {'\n'}
                </>
            } else {
                return <>
                    {(index / 2) + 1 + '.'}
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                </>
            }
        })
    }

    const changeMove = (moveNr) => {
        console.log(moveNr + 1)
    }

    function mouseEnter(event) {
        event.target.style.background = 'gray';
        event.target.style.borderRadius = '5px'
    }

    function mouseLeave(event) {
        event.target.style.background = 'white';
    }

    // const changeMove = useCallback((value) => (moveNr) => {
    //     console.log(value)
    //     console.log(moveNr)
    // })
    // (index) {
    //     console.log(`go to move ${index}`)
    // }

    return (
        <div style={{ whiteSpace: 'pre-line' }}>{newList}</div>
    )
}
