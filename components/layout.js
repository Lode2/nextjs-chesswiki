import Head from 'next/head'
import Bottomnavbar from './bottomnavbar'
import Topnavbar from './topnavbar'
// import Image from 'next/image'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div style={{
            backgroundColor: '#232323',
            color: 'white',
        }}>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <Topnavbar />
            <main style={{ minHeight: '100vh' }}>
                {children}
            </main>
            <Bottomnavbar />
        </div>
    )
}
