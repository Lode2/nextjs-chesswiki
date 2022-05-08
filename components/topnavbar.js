import Link from 'next/link'

export default function Topnavbar() {
    // LOGO: route back to home page
    // Explore chess openings
    // Study chess openings
    // Add chess openings
    return (
        <div style={{ display: 'flex', marginLeft: '50px', marginRight: '50px', justifyContent: 'space-around', border: '2px black solid' }}>
            <Link href="/">HOME</Link>
            <Link href="/">EXPLORE CHESS OPENINGS</Link>
            <Link href="/">STUDY CHESS OPENINGS</Link>
            <Link href="/">ADD CHESS OPENINGS</Link>
        </div>
    )
}
