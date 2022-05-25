import Head from 'next/head'
import Bottomnavbar from './bottomnavbar'
import Topnavbar from './topnavbar'

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
            <main style={{ minHeight: 'calc(100vh - 170px)' }}>
                {children}
            </main>
            <Bottomnavbar />
        </div>
    )
}
