import { useState, useRef, useMemo, useEffect } from 'react'

export default function Movelistcanvas(props) {
    // console.log('rendering movelistcanvas')
    const [newList, setNewList] = useState()
    const [useList, setUseList] = useState()
    // const oldListLength = useRef(0)
    const [oldListLength, setOldListLength] = useState()

    const buttonStyle = { all: 'unset', cursor: 'pointer', borderRadius: '5px', paddingLeft: '3px', paddingRight: '3px', marginLeft: '5px' }

    // the list of styled moves remains the same for the entire game, until another game is loaded, so memoize
    // const newList = useMemo(() => createStyledMoveList(props.moveList), [props.moveList])
    // useMemo(() => oldListLength.current = 0, [props.moveList])
    useMemo(() => {
        console.log('memo')
        // oldListLength.current = 0
        setOldListLength(0)
        createStyledMoveList(props.moveList)
        props.changeCounter(0)
    }, [props.moveList])

    // let useList = []
    useEffect(() => {
        console.log('useeffect')
        if (props.currentCounter === 0 && oldListLength === 0) {
            setUseList('')
        } else if (props.currentCounter > oldListLength) {
            // oldListLength.current = props.currentCounter
            setOldListLength(props.currenCounter)
            setUseList(newList.slice(0, props.currentCounter))
            // useList = newList.slice(0, props.currentCounter)
        } else {
            setUseList(newList.slice(0, oldListLength))
            // useList = newList.slice(0, oldListLength.current)
        }
    }, [props.currentCounter])

    function createStyledMoveList(list) {
        if (list.length === 0) {
            return []
        }
        // oldListLength.current = 0
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
        setNewList(styledList)
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
        <div style={{ whiteSpace: 'pre-line' }}>{useList}</div>
    )
}
