import CollapsibeList from '../../components/CollapsibleList'
import OnHoverChessBoard from '../../components/ChessBoardUI/OnHoverChessBoard'

export default function clickableList() {
    // data received from the server 
    const serverList = [{
        name: 'Rúy Lopez', type: 'parent', moveInfo: {
            startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
        }, children: [
            {
                name: 'Morphy defence', type: 'child', moveInfo: {
                    startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6'],
                }
            },
            {
                name: 'Closed defence', type: 'child', moveInfo: {
                    startingPos: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7'],
                }
            },
        ]
    }]
    const renderList = serverList.map((list) => { return makeListObject(list) })

    return (
        <div style={{ marginTop: '200px' }}>
            <CollapsibeList listStructure={renderList} />
        </div>
    )
}

function makeListObject(item) {
    // function to turn the turnInfo key from the server data into a html element that contains a chessboard on hover
    if (item.type === 'parent') {
        return {
            name: item.name,
            type: item.type,
            display: <div>{item.name}<OnHoverChessBoard moveData={item.moveInfo} boardSize={20} hoverMeElement={<div>&#9432;</div>} /></div>,
            children: item.children.map((single) => { return makeListObject(single) })
        }
    } else {
        return {
            name: item.name,
            type: item.type,
            display: <div>{item.name}<OnHoverChessBoard moveData={item.moveInfo} boardSize={20} hoverMeElement={<div>&#9432;</div>} /></div>
        }
    }
}