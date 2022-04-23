import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Newchessboard from '../../components/newchessboard';

export default function FirstPost() {
    const [chessboard, setChessboard] = useState("starting position");

    return (
        <>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <h1>New edit page for Chesswiki</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Button onClick={() => {
                console.log('Update position button hit')
                setChessboard('London system')
            }} size="small" variant="contained">Update position</Button>
            {chessboard}
            <Newchessboard FENNotation={chessboard} interactive={true} windowSize={window.innerWidth} />
        </>
    )
}
