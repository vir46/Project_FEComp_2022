import React from "react";
import styles from "./landpage.module.css";
import titles from '../stockgallery/title.png';
import { Button } from 'react-bootstrap';
import '@lottiefiles/lottie-player';
import { FaRocket } from 'react-icons/fa';


const Landingpage = () => {
    return(
        <div>
            {/* Head Title */}
            <div className={styles.headcontainer}>
                <div class={styles.titlecontainer}>
                    <img src={titles} alt="title" id={styles.titlelogo}/>
                    <Button  className={[styles.btntest, styles.custombtn]}>
                        <FaRocket/>Explore
                    </Button>
                </div>
                <div class={styles.imagecontainer}>
                    <div class={styles.circle}></div>
                    <lottie-player id={styles.lottievr} autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_n0b0gzpq.json"></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;