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
      <Link href="/test-routes/autoplayboard"><a>Auto play chessboard</a></Link><br></br>
      Finished components:<br></br>
      <Link href="/test-routes/testList"><a>Collapsible list</a></Link><br></br>
      Finished pages:<br></br>
      <Link href="/view-opening"><a>View opening</a></Link><br></br>
    </>
  )
}
