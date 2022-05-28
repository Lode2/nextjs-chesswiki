export default function Positionexplanationcanvas(props) {
    // console.log('rendering positionexplanationcanvas')
    const newInfo = props.move === 0 ? 'Here the moves that are made will be explained.' : props.info[props.move - 1]
    return (
        <div style={{ height: '100%', overflow: 'scroll', backgroundColor: 'rgb(116, 105, 105)' }}>
            {newInfo}
        </div>
    )
}