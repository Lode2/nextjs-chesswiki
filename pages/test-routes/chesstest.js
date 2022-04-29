import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Newchessboard from '../../components/newchessboardUI/newchessboard';
import NewchessboardUI from '../../components/newchessboardUI/newchessboardUI';
import { Chess } from 'chess.js'
import Chessgame from '../../public/model/chess'

const exampleFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const moves = '1. e4 Nf6 2. e5 d5 3. exd6 e6 4. Bd3 Be7 5. Nf3 O-O 6. O-O *'

const chessgame = new Chessgame(exampleFEN, moves)
chessgame.loadOpening()
// chessgame.getChangeOnMove()

export default function FirstPost() {
    const [chessboard, setChessboard] = useState("starting position");
    const [chesstext, setChesstext] = useState('')
    // const l = chess.board()
    // setChesstext(l)
    return (
        <>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <h1>Chess test page</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <div>
                <h1>Info about chess.js logs</h1>
                Test whether en passant captures shows something special:
                {chesstext}<br></br>
                {/* {JSON.stringify(chess.board())} */}<br></br>
                {/* {chess.ascii()} */}
            </div>
            {/* <Button onClick={() => {
                console.log('Update position button hit')
                setChessboard('London system')
            }} size="small" variant="contained">Update position</Button>
            {chessboard} */}
            {/* <NewchessboardUI chessboardUISize={size.width != undefined ? size.width : 1280} /> */}
        </>
    )
}
