import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Chessboard from '../../components/chessboard'
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function FirstPost() {
    const [chessPosition, setChessPosition] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    return (
        <>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <h1>Edit page for Chesswiki</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Button onClick={() => { setChessPosition('rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2') }} size="small" variant="contained">Hi</Button>
            <Chessboard position={chessPosition}></Chessboard>
        </>
    )
}
