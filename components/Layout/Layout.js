import Head from 'next/head'
import Bottomnavbar from './BottomNavbar'
import Topnavbar from './TopNavbar'

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
