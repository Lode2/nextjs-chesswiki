import Link from 'next/link'
import navStyles from '../../styles/navbar.module.css'

export default function Topnavbar() {
    // console.log('rendering topnavbar')
    // LOGO: route back to home page
    // Explore chess openings
    // Study chess openings
    // Add chess openings
    return (
        <nav className={navStyles.topnavbar}>
            <Link href="/"><a className={navStyles.link}>HOME</a></Link>
            <Link href="/"><a className={navStyles.link}>EXPLORE CHESS OPENINGS</a></Link>
            <Link href="/"><a className={navStyles.link}>STUDY CHESS OPENINGS</a></Link>
            <Link href="/"><a className={navStyles.link}>ADD CHESS OPENINGS</a></Link>
        </nav>
    )
}
