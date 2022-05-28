import { useState, useMemo, useEffect } from 'react'
import styles from '../../styles/moveList.module.css'

export default function MoveListCanvas(props) {

    const [newList, setNewList] = useState()
    const [useList, setUseList] = useState()
    const [oldListLength, setOldListLength] = useState()

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
                    <button className={styles.moveStyling} onClick={() => changeMove(index)}>
                        {item}
                    </button>
                    {'\n'}
                </span>
            } else {
                return <span style={spanStyle} key={`moveList ${index}`}>
                    {(index / 2) + 1 + '.'}
                    <button className={styles.moveStyling} onClick={() => changeMove(index)}>
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
                <button className={styles.currentMoveStyling} onClick={() => changeMove(index)}>
                    {item}
                </button>
                {'\n'}
            </span>
        } else {
            return <span style={spanStyle} key={`moveList ${index}`}>
                {(index / 2) + 1 + '.'}
                <button className={styles.currentMoveStyling} onClick={() => changeMove(index)}>
                    {item}
                </button>
            </span>
        }
    }

    const changeMove = (moveNr) => {
        // console.log(moveNr + 1)
        props.changeCounter(moveNr + 1)
    }

    return (
        <div style={{ whiteSpace: 'pre-line', height: '100%', overflow: 'scroll' }}>{useList}</div>
    )
}
