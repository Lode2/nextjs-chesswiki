// import Image from 'next/image'
// import styles from './layout.module.css'
import { useState, useEffect } from 'react'
import Chess from '../node_modules/chess.js'
import Image from 'next/image'

// const name = 'Your Name'
// export const siteTitle = 'Chesswiki'

export default function Chessboard(props) {
    // console.log(props)
    const [boardpos, setBoardpos] = useState(props.position)
    // find difference between current boardpos and previous one

    // setBoardpos('chessjnewpos')
    const boardSize = 400;
    useEffect(() => {
        console.log("update")
    });

    const chessgame = new Chess();
    chessgame.load(boardpos)
    // the current chessgame position, rendered into 1 list
    const [pieces, setPieces] = useState([].concat.apply([], chessgame.board().reverse()))
    // console.log(pieces)

    // const [chesspos, setChesspos] = useState(chessgame.load());
    // list with the piece for every square
    const imageList = pieces.map(item => {
        if (item === null) {
            return "";
        } else {
            // return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 45, height: 45 }}><Image src={"/images/" + item.type + item.color + ".png"} width={45} height={45} /></div>;
            return <Image src={"/images/" + item.type + item.color + ".png"} width={45} height={45} />;
        }
    })

    // create a styled div for every square
    const renderedOutput = Array.from(Array(64).keys()).map(item => {
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
    })
    function myFunction() {
        // setChesspos(chessgame.load('r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - c3 0 19'))
        console.log('mouseenter')
    }
    function loadPosition() {
        chessgame.load(boardpos)
        // console.log(chessgame.board())
        // console.log(renderedOutput)
        // console.log(renderedOutput.find(x => x.key === '0'))
        // alert(chesspos)
    }
    loadPosition()
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: boardSize,
            height: boardSize
        }}>
            {renderedOutput}
        </div >
    )
}
