export default function Positionexplanationcanvas(props) {
    console.log('rendering positionexplanationcanvas')
    const newInfo = props.info[props.move - 1]
    return (
        <div>
            {newInfo}
        </div>
    )
}