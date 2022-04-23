import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Newchessboard from '../../components/newchessboardUI/newchessboard';
import NewchessboardUI from '../../components/newchessboardUI/newchessboardUI';

export default function FirstPost() {
    const [chessboard, setChessboard] = useState("starting position");
    const size = useWindowSize();
    // Hook
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // only execute all the code below in client side
            if (typeof window !== 'undefined') {
                // Handler to call on window resize
                function handleResize() {
                    // Set window width/height to state
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }

                // Add event listener
                window.addEventListener("resize", handleResize);

                // Call handler right away so state gets updated with initial window size
                handleResize();

                // Remove event listener on cleanup
                return () => window.removeEventListener("resize", handleResize);
            }
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
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
            <NewchessboardUI chessboardUISize={size.width != undefined ? size.width : 1280} />
        </>
    )
}
