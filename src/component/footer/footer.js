import React from "react";
import styles from './footer.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return(
        <div>
            <div class={styles.container}>
                <div class={styles.container2}>
                    <div class={styles.team}>
                        <span id={styles.spanteam}>Developer Team :</span>
                        <ul>
                            <li>- Virtus Tan</li>
                            <li>- Axel Santoso</li>
                            <li>- Kevin Ghebre</li>
                        </ul>
                    </div>
                    <div class={styles.footerlink}>
                        <Link id={styles.linkhome} to="/#homeofhome">Homepage</Link>
                        <Link id={styles.linkhome} to="/login">Login</Link>
                        {/* <Link id={styles.linkhome} to="/">Homepage</Link> */}
                    </div>
                </div>
                <div class={styles.container3}>
                    <span>Copyright © 2022 Valverse Team</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;