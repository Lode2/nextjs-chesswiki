export default function Newchessboardsquare(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: props.size,
            height: props.size,
            backgroundColor: props.squareColor === 'dark' ? '#a52a2a' : '#f5f5dc',
            // border: '2px black solid',
            // margin: '5px'
        }}>
            {/* {props.chessPiece ? props.chessPiece : 'no piece'} */}
            {/* <br></br> */}
            {props.squareNumber}
        </div >
    )
}