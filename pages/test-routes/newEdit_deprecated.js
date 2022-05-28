import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Newchessboard from '../../components/newchessboardUI/newchessboard';
import NewchessboardUI from '../../components/newchessboardUI/newchessboardUI';
import Topnavbar from '../../components/Layout/TopNavbar';
import Bottomnavbar from '../../components/Layout/BottomNavbar';

export default function FirstPost() {
    const [size, setSize] = useState({ heigth: 8 * 140, width: 8 * 140 })
    // const size = useWindowSize();
    // Hook
    // function useWindowSize() {
    //     // Initialize state with undefined width/height so server and client renders match
    //     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    //     const [windowSize, setWindowSize] = useState({
    //         width: undefined,
    //         height: undefined,
    //     });

    //     useEffect(() => {
    //         // only execute all the code below in client side
    //         if (typeof window !== 'undefined') {
    //             // Handler to call on window resize
    //             function handleResize() {
    //                 // Set window width/height to state
    //                 setWindowSize({
    //                     width: window.innerWidth,
    //                     height: window.innerHeight,
    //                 });
    //             }

    //             // Add event listener
    //             window.addEventListener("resize", handleResize);

    //             // Call handler right away so state gets updated with initial window size
    //             handleResize();

    //             // Remove event listener on cleanup
    //             return () => window.removeEventListener("resize", handleResize);
    //         }
    //     }, []); // Empty array ensures that effect is only run on mount
    //     return windowSize;
    // }
    return (
        <div style={{
            backgroundColor: '#232323',
            color: 'white',
        }}>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <Topnavbar />
            {/* <NewchessboardUI chessboardUISize={size.width != undefined ? size.width : 1280} /> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NewchessboardUI chessboardUISize={size.width} />
            </div>
            <Bottomnavbar />
        </div>
    )
}
