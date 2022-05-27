import Head from 'next/head'
import Layout, { siteTitle } from '../components/oldlayout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/test-routes/newEdit"><a>new Edit js</a></Link><br></br>
      <Link href="/test-routes/treeStructure"><a>d3 tree structure</a></Link><br></br>
      <Link href="/test-routes/testList"><a>Collapsible list</a></Link><br></br>
      Finished pages:<br></br>
      <Link href="/view-opening"><a>View opening</a></Link><br></br>
    </>
  )
}
