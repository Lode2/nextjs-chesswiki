import Link from 'next/link'
import navStyles from './navbar.module.css'

export default function Bottomnavbar() {
    return (
        // the i tags are from font awesome
        <nav className={navStyles.bottomnavbar}>
            <div className={navStyles.items} style={{ gridArea: 'a' }}><Link href="/"><a className={navStyles.link}>FAQ (Frequently Asked Questions)</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'b' }}><Link href="/"><a className={navStyles.link}>About us</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'c' }}>Connect with us on:</div>
            <div className={navStyles.items} style={{ gridArea: 'd' }}><Link href="/"><a className={navStyles.link}><i className="fab fa-twitter"></i>&nbsp;Twitter</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'e' }}><Link href="/"><a className={navStyles.link}><i className="fab fa-instagram"></i>&nbsp;Instagram</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'f' }}>© 2022 Chesswiki</div>
            <div className={navStyles.items} style={{ gridArea: 'g' }}><Link href="/"><a className={navStyles.link}><i className="fab fa-facebook-f"></i>&nbsp;Facebook</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'h' }}><Link href="/"><a className={navStyles.link}><i className="fas fa-envelope-square"></i>&nbsp;E-mail</a></Link></div>
        </nav>
    )
}