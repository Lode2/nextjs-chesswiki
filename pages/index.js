import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chesswiki</title>
      </Head>
      <Link href="/test-routes/newEdit_deprecated"><a>new Edit js (deprecated, DONT CLICK)</a></Link><br></br>
      <Link href="/test-routes/treeStructure"><a>d3 tree structure</a></Link><br></br>
      Non-finished components:<br></br>

      Finished components:<br></br>
      <Link href="/test-routes/autoplayboard"><a>Auto play chessboard</a></Link><br></br>
      <Link href="/test-routes/boardonhover"><a>Auto play chessboard when hover</a></Link><br></br>
      <Link href="/test-routes/testList"><a>Collapsible list</a></Link><br></br>
      <Link href="/test-routes/view-opening"><a>ChessBoardUI</a></Link><br></br>
      Combined components to make something useful:<br></br>
      <Link href="/combined-components/clickableList"><a>List with clickable items and chessboard on hover</a></Link><br></br>

    </>
  )
}
