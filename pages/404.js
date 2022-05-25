import Link from 'next/link'

export default function Notfound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginTop: '0px' }}>Error 404</h1>
            <h2>This page cannot be found</h2>
            <Link href='/'><a style={{ color: 'white' }}>Go back to the home page</a></Link>
        </div>
    )
}
