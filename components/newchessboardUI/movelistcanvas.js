import { useState, useMemo, useEffect } from 'react'

export default function Movelistcanvas(props) {
    // console.log('rendering movelistcanvas')

    const [newList, setNewList] = useState()
    const [useList, setUseList] = useState()
    const [oldListLength, setOldListLength] = useState()

    const buttonStyle = { all: 'unset', background: 'transparent', cursor: 'pointer', borderRadius: '5px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }
    const highlightedButtonStyle = { all: 'unset', background: 'transparent', textDecoration: 'underline', cursor: 'pointer', borderRadius: '5px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }
    const spanStyle = {
        width: 'auto', heigth: 'auto', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', UserSelect: 'none'
    }

    useMemo(() => {
        setOldListLength(0)
        createStyledMoveList(props.moveList)
    }, [props.moveList])

    useEffect(() => {
        if (props.currentCounter === 0 && oldListLength === 0) { // new opening loaded
            setUseList('')
        } else if (props.currentCounter > oldListLength) { // next move made
            const highLightedMoveList = [...newList].slice(0, props.currentCounter - 1)
            highLightedMoveList[props.currentCounter] = createStyledMoveElement(props.moveList[props.currentCounter - 1], props.currentCounter - 1)

            setOldListLength(props.currentCounter)
            setUseList(highLightedMoveList)
        } else { // previous move made
            const highLightedMoveList = [...newList].slice(0, oldListLength)
            highLightedMoveList[props.currentCounter - 1] = createStyledMoveElement(props.moveList[props.currentCounter - 1], props.currentCounter - 1)

            setUseList(highLightedMoveList)
        }
    }, [props.currentCounter])

    function createStyledMoveList(list) {
        if (list.length === 0) {
            return []
        }
        const styledList = list.map((item, index) => {
            if (index % 2 !== 0) {
                return <span style={spanStyle} key={`moveList ${index}`}>
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                    {'\n'}
                </span>
            } else {
                return <span style={spanStyle} key={`moveList ${index}`}>
                    {(index / 2) + 1 + '.'}
                    <button style={buttonStyle} onClick={() => changeMove(index)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {item}
                    </button>
                </span>
            }
        })
        setNewList(styledList)
    }
    function createStyledMoveElement(item, index) {
        if (index % 2 !== 0) {
            return <span style={spanStyle} key={`moveList ${index}`}>
                <button style={highlightedButtonStyle} onClick={() => changeMove(index)} onMouseLeave={mouseLeave}>
                    {item}
                </button>
                {'\n'}
            </span>
        } else {
            return <span style={spanStyle} key={`moveList ${index}`}>
                {(index / 2) + 1 + '.'}
                <button style={highlightedButtonStyle} onClick={() => changeMove(index)} onMouseLeave={mouseLeave}>
                    {item}
                </button>
            </span>
        }
    }

    const changeMove = (moveNr) => {
        console.log(moveNr + 1)
        props.changeCounter(moveNr + 1)
    }

    function mouseEnter(event) {
        event.target.style.background = 'gray';
    }

    function mouseLeave(event) {
        event.target.style.background = 'inherit';
    }

    return (
        <div style={{ whiteSpace: 'pre-line', height: '100%', overflow: 'scroll' }}>{useList}</div>
    )
}
