import React from "react";
import styles from "./landpage.module.css";
import titles from '../stockgallery/title.png';
import { Button } from 'react-bootstrap';
import '@lottiefiles/lottie-player';
import { FaRocket } from 'react-icons/fa';
import plane from '../asset3d/plane/Airplane.glb';
import Bumi from '../component/parallax/imageearth.js';

const Landingpage = () => {
    return(
        <div>
            {/* Head Title */}
            <div className={styles.headcontainer}>
                <div className={styles.titlecontainer}>
                    <img src={titles} alt="title" id={styles.titlelogo}/>
                    <Button  className={[styles.btntest  + " " +  styles.custombtn]}>
                        <FaRocket/>Explore
                    </Button>
                </div>
                <div class={styles.imagecontainer}>
                    <div class={styles.circle} ></div>
                    <lottie-player id={styles.lottievr} autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_n0b0gzpq.json"></lottie-player>
                </div>
            </div>
            {/* Content 1 */}
            <div className={styles.content1}>
                <div class={styles.container1}>
                    <span className={[styles.blackfont + " " + styles.headingcontent1]}>What is Valverse?</span>
                    <p className={[styles.blackfont + " " + styles.bodycontent1]}>
                        Valverse is a platform that connects people with the new virtual world.
                        Built by a team of passionate developers, Valverse connect billion of people together.
                        What u cant do in the real world, u can do in the virtual world. 
                        Embrace the power of infinite possibilities.
                        Join us and become part of the future of virtual reality.
                    </p>
                </div>
                <model-viewer alt="Plane" src={plane} poster="shared-assets/models/NeilArmstrong.webp" seamless-poster camera-controls></model-viewer>
            </div>
            <div>
                <Bumi/>
            </div>
            <div className={styles.content1}>
                <div class={styles.container1}>
                    <span className={[styles.blackfont + " " + styles.headingcontent1]}>What is Valverse?</span>
                    <p className={[styles.blackfont + " " + styles.bodycontent1]}>
                        Valverse is a platform that connects people with the new virtual world.
                        Built by a team of passionate developers, Valverse connect billion of people together.
                        What u cant do in the real world, u can do in the virtual world. 
                        Embrace the power of infinite possibilities.
                        Join us and become part of the future of virtual reality.
                    </p>
                </div>
                <model-viewer alt="Plane" src={plane} poster="shared-assets/models/NeilArmstrong.webp" seamless-poster camera-controls></model-viewer>
            </div>
            <div className={styles.content1}>
                <div class={styles.container1}>
                    <span className={[styles.blackfont + " " + styles.headingcontent1]}>What is Valverse?</span>
                    <p className={[styles.blackfont + " " + styles.bodycontent1]}>
                        Valverse is a platform that connects people with the new virtual world.
                        Built by a team of passionate developers, Valverse connect billion of people together.
                        What u cant do in the real world, u can do in the virtual world. 
                        Embrace the power of infinite possibilities.
                        Join us and become part of the future of virtual reality.
                    </p>
                </div>
                <model-viewer alt="Plane" src={plane} poster="shared-assets/models/NeilArmstrong.webp" seamless-poster camera-controls></model-viewer>
            </div>
        </div>
    );
}

export default Landingpage;