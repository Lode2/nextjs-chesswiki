export default function Movelistcanvas(props) {
    let newList = []

    if (props.moveList.length !== 0) {
        newList = props.moveList.map((item, index) => {
            if (index % 2 !== 0) {
                return " " + item + '\n'
            } else {
                return (index / 2) + 1 + '. ' + item
            }
        })
    }

    return (
        <div style={{ whiteSpace: 'pre-line' }}>{newList}</div>
    )
}
