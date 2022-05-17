

export default function Engineevalbar(props) {
    const currentEval = props.move - 1 === -1 ? 0.2 : props.evaluation[props.move - 1]
    const evalPosition = currentEval >= 0 ? { top: '0', color: 'black' } : { bottom: '0', color: 'white' }
    const whiteHeight = (currentEval + 10) * 5

    // currenteval = 10 -> white height 100%, black height 0%
    // currenteval = -10 -> black height 100%, white height 0%
    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ height: whiteHeight + '%', backgroundColor: 'white', width: '100%' }}></div>
            <div style={{ height: 100 - whiteHeight + '%', backgroundColor: 'black', width: '100%' }}></div>
            <div style={Object.assign({ position: 'absolute', fontSize: '15px' }, evalPosition)}>{Math.abs(currentEval) === 10 ? Math.abs(currentEval) : Math.abs(currentEval).toFixed(1)}</div>
        </div>
    )
}
