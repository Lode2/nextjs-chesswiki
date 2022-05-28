import Head from 'next/head'
import { useState } from 'react'
import NewchessboardUI from '../components/ChessBoardUI/ChessBoardUI';
import Topnavbar from '../components/topnavbar';
import Bottomnavbar from '../components/bottomnavbar';

export default function viewOpening(props) {
    const [size, setSize] = useState({ heigth: 8 * 140, width: 8 * 140 })
    const data = props.info === undefined ?
        {
            // dummy opening, when no opening info (object of length 0) has been passed to this page
            name: 'Queens pawn',
            startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            moves: ['e4', 'Nf6', 'e5', 'd5', 'exd6', 'e6', 'Bd3', 'Be7', 'Nf3', 'O-O', 'O-O',],
            moveInfo: ["1. e4, one of the most common opening moves.",
                "Nf6 is not the most common responce.",
                "2. e5, attacking the knight.",
                "The knight remains under attack.",
                "3. exd6, white captures en passant.",
                "Black pushes the e pawn.",
                "White developes its first piece, the white squared bishop.",
                "Black responds by also developing a bishop.",
                "5. Nf3 by white.",
                "Black short-castles its king to safety.",
                "White follows black's lead, and castles short."],
            moveEval: [0.2, -0.9, 0.4, 3.2, 3.6, 7.4, 6.6, 7.0, 7.1, 9.7, 8.6, 8.7, 8.0, 8.2, 7.9, 8.9, 8.9, 8.8, 9.1, 9.1, 8.7, 9.2, 9.2, 9.2, 8.8, 9.6, 8.9, 9.0, 9.0, 9.2, 9.3, 9.8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            evalInfo: ['Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40', 'Stockfish 14 NNUE depth: 40']
        } : props.info
    const [openingData, setOpeningData] = useState(data)

    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NewchessboardUI chessboardUISize={size.width} openingData={openingData} />
        </div>
    )
}
