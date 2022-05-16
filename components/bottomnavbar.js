import Link from 'next/link'
import navStyles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Bottomnavbar() {
    console.log('rendering bottomnavbar')
    return (
        // the i tags are from font awesome
        <nav className={navStyles.bottomnavbar}>
            <div className={navStyles.items} style={{ gridArea: 'a' }}><Link href="/"><a className={navStyles.link}>FAQ (Frequently Asked Questions)</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'b' }}><Link href="/"><a className={navStyles.link}>About us</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'c' }}>Connect with us on:</div>
            <div className={navStyles.items} style={{ gridArea: 'd' }}><Link href="/"><a className={navStyles.link}><FontAwesomeIcon icon={faTwitter} />&nbsp;Twitter</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'e' }}><Link href="/"><a className={navStyles.link}><FontAwesomeIcon icon={faInstagram} />&nbsp;Instagram</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'f' }}>© 2022 Chesswiki</div>
            <div className={navStyles.items} style={{ gridArea: 'g' }}><Link href="/"><a className={navStyles.link}><FontAwesomeIcon icon={faFacebook} />&nbsp;Facebook</a></Link></div>
            <div className={navStyles.items} style={{ gridArea: 'h' }}><Link href="/"><a className={navStyles.link}><FontAwesomeIcon icon={faEnvelope} />&nbsp;E-mail</a></Link></div>
        </nav>
    )
}