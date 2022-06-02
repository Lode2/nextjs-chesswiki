import ChessBoard from "./ChessBoard"
import { useState, useRef } from 'react'
import { useEffect } from "react"

export default function AutoPlayChessBoard({ boardSize, openingData, inFocus }) {
    const [moveCounter, setMoveCounter] = useState(hi)
    function hi() {
        console.log('state initialized')
        return 0
    }

    // if (!inFocus && moveCounter !== 0) { // moves should be paused
    //     setMoveCounter(0)
    // }
    // if (inFocus) {
    //     setTimeout(() => {
    //         moveCounter === openingData.moves.length ? setMoveCounter(0) : setMoveCounter(moveCounter + 1)
    //     }, 1000)
    // }
    // inFocus === true ? setTimeout(() => { moveCounter === openingData.moves.length ? setMoveCounter(0) : setMoveCounter(moveCounter + 1) }, 1000) : clearTimeout()
    let timer;
    if (inFocus) {
        timer = setTimeout(updateCounter, 1000)
    } else { clearTimeout(timer) }
    function updateCounter() {
        moveCounter === openingData.moves.length ? setMoveCounter(0) : setMoveCounter(moveCounter + 1);
        clearTimeout(timer)
        console.log(moveCounter)
    }
    // else {
    //     console.log('outfocus')
    //     clearTimeout(timer)
    //     if (moveCounter !== 0) {
    //         setMoveCounter(0)
    //     }
    // }
    // useEffect(() => {
    //     if (!inFocus) {
    //         setMoveCounter(0)
    //     }
    // }, [inFocus])
    // if (inFocus) {
    //     setTimeout(() => {
    //         if (inFocus) {
    //             moveCounter === openingData.moves.length ? setMoveCounter(0) : setMoveCounter(moveCounter + 1)
    //         }
    //     }, 1000)
    // }

    // console.log(moveCounter)
    return (
        <>
            <ChessBoard chessboardSize={boardSize} FEN={openingData.startingPos} theoryMoves={openingData.moves} moveCounter={moveCounter} />
        </>
    )
}
