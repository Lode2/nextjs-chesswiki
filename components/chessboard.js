// import Image from 'next/image'
// import styles from './layout.module.css'
import { useState, useEffect } from 'react'
import Chess from '../node_modules/chess.js'
import Image from 'next/image'

// const name = 'Your Name'
// export const siteTitle = 'Chesswiki'

export default function Chessboard(props) {
    const boardSize = 400;

    const chessgame = new Chess();

    // the current chessgame position, rendered into 1 list
    const [pieces, setPieces] = useState([].concat.apply([], chessgame.board().reverse()))
    // console.log(pieces)
    const [imageList, setImageList] = useState(Array(64))
    const [boardSquares, setBoardSquares] = useState(Array(64))

    // find difference between current boardpos and previous one

    // setBoardpos('chessjnewpos')
    // console.log(boardpos)
    // https://reactjs.org/docs/hooks-effect.html You can tell React to skip applying an effect if certain values haven’t changed between re-renders.
    useEffect(() => {
        console.log("update imagelist")
        chessgame.load(props.position)
        console.log(chessgame.ascii())
        setPieces([].concat.apply([], chessgame.board().reverse()))
        // list with the piece for every square
        setImageList(pieces.map(item => {
            if (item === null) {
                return "";
            } else {
                // return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 45, height: 45 }}><Image src={"/images/" + item.type + item.color + ".png"} width={45} height={45} /></div>;
                return <Image src={"/images/" + item.type + item.color + ".png"} width={45} height={45} />;
            }
        }))
    }, [props.position]);

    useEffect(() => {
        // console.log(imageList)
        // create a styled div for every square
        setBoardSquares(Array.from(Array(64).keys()).map(item => {
            // for squareId
            const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const integer = Math.floor(item / 8);
            const decimal = item - 8 * integer;
            const squareId = letters[decimal] + (integer + 1);

            // for squareColor
            const squareColor = ['#a52a2a', '#f5f5dc'];
            const mod16 = item % 16;
            let mod2 = mod16 % 2;
            // reverse color if an even row: https://gamedev.stackexchange.com/questions/44979/elegant-solution-for-coloring-chess-tiles
            if (mod16 > 7) {
                mod2 = 1 - mod2;
            }
            return <div key={item.toString()} onMouseEnter={myFunction} style={{ display: "flex", justifyContent: "center", alignItems: "center", position: 'relative', backgroundColor: squareColor[mod2], width: boardSize / 8, height: boardSize / 8 }}>{imageList[item]}<div key={squareId} style={{ position: 'absolute', left: 0, bottom: 2, fontSize: 10, textAlign: 'center', userSelect: 'none', width: boardSize / 32, height: boardSize / 32 }}>{squareId}</div> </div >
        }))
        // console.log(boardSquares)
    }, [imageList])
    console.log("new board squares")


    function myFunction() {
        console.log('mouseenter')
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: boardSize,
            height: boardSize
        }}>
            {boardSquares}
        </div >
    )
}
