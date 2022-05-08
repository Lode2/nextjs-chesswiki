import { useState, useEffect, useCallback, useMemo } from "react";
import Newchessboardsquare from "./newchessboardsquare";
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const newFEN = '7R/Bk2n3/5p1p/p5pb/5P1b/1P2P1P1/P6K/8 w - - 2 40'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

export default function Newchessboard(props) {
    console.log('rendering newchessboard')
    // ik denk dat het probleem is dat de memoize niet werkt en dat de waarde toch elke render update, aangezien alles werkt,
    // alleen wordt de positie elke zet naar de beginpositie gezet.
    // het werkt allemaal als ik usememo gebruik voor loadopening ipv usecallback, heel raar
    const chessgame = useMemo(() => new Chessgame(props.FEN, props.theoryMoves), [props.FEN, props.theoryMoves])
    const cb = useMemo(() => chessgame.loadOpening(), [props.FEN, props.theoryMoves])
    const startingPos = useMemo(() => chessgame.getPosition(), [props.FEN, props.theoryMoves])

    const squareSize = props.chessboardSize * 0.5 * 0.125
    const [pieceArray, setPieceArray] = useState(startingPos)
    const [boardSquares, setBoardSquares] = useState(createSquareProp(startingPos))
    const [moveCounter, setMoveCounter] = useState(props.moveCounter)

    useEffect(() => {
        console.log('inside onmount useeffect')
        props.moveListRef.current = chessgame.moveArray
    }, [])

    // const newMoveList = useMemo(() => props.updateMoveList(chessgame.moveArray.slice(0, props.moveCounter)), [props.moveCounter])
    useEffect(() => {
        console.log('inside newchessboard useeffect')
        // find whether to update the position by playing the next or the previous move. Make that move.
        setMoveCounter(moveCounterDirection)
        const currentPosArray = chessgame.positionArray

        // find the squares that change between the old and the new position, currentPosArray is new position
        const changedSquares = arrayDiff(currentPosArray, pieceArray)
        // update pieceArray so the current pos can be used as the old pos when there is a move being made again
        setPieceArray(currentPosArray)

        // the same position, happens when a position is first loaded: render the position and update the state
        if (changedSquares.length === 0) {
            const renderedPos = createSquareProp(currentPosArray)
            setBoardSquares(renderedPos)
        }
        // something changed in the position: render the squares that are changed and change boardSquares to only change those changed squares
        else {
            const renderedChangedSquares = createSquareProp(changedSquares)
            setBoardSquares(updateChangedSquares(renderedChangedSquares))
        }
    }, [props.moveCounter])

    function arrayDiff(arrayA, arrayB) {
        let diff = []
        for (let i = 0; i < arrayA.length; i++) {
            if (!(arrayA[i].chessPiece === arrayB[i].chessPiece)) {
                diff.push(arrayA[i])
            }
        }
        return diff
    }

    // updates a state so that items in the list that stay the same don't have to be re-rendered
    function updateChangedSquares(changedSquares) {
        // 1. Make a shallow copy of the items
        let items = [...boardSquares];
        changedSquares.forEach((square) => {
            // 2. Make a shallow copy of the item you want to mutate
            let item = { ...items[square.props.squareNumber] };
            // 3. Replace the property you're intested in
            item = square;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            items[square.props.squareNumber] = item;
        })

        return items
    }

    // finds the direction the move counter is going by evaluating the previous move counter
    function moveCounterDirection() {
        if (moveCounter < props.moveCounter) {
            chessgame.nextMove(props.moveCounter - 1, props.moveCounter - moveCounter)
        } else {
            chessgame.previousMove(props.moveCounter, moveCounter - props.moveCounter)
        }
        return props.moveCounter
    }

    // create a list of chessboard squares
    function createSquareProp(rawList) {
        return rawList.map(item => {
            return <Newchessboardsquare key={item.index} squareNumber={item.index} squareId={item.squareId} chessPiece={item.chessPiece} squareColor={item.squareColor} size={squareSize} />
        })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.chessboardSize * 0.5,
            height: 'auto'
        }}>
            {boardSquares}
            {`currentmove: ${props.moveCounter}`}
        </div>
    )
}