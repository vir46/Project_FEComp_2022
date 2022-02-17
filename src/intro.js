import { Link } from 'react-router-dom';
import styles from './intro.module.css';
import Spacevid from './stockgallery/sky.mp4';
import title from './stockgallery/title.png';
import vrlogo from './stockgallery/vr.png';
import '@lottiefiles/lottie-player';

function Intro(){
    return(
        <div>
        <div onContextMenu={e => e.preventDefault()}>
        <video 
          class={styles.videobackgroundspace}
          autoplay="true"
          loop="true"
          muted="true">
          <source src={Spacevid} type="video/mp4"/>
        </video>
        </div>
            <div class={styles.titlebar}>
                <div class={styles.imgcontainer}>
                    <img src={vrlogo} alt="logo" id={styles.vrlogo}/>
                    <img src={title} alt="title" id={styles.titlelogo}/>
                </div>
                <span>Discover the new world you've never see</span>
                <Link to="/home" class={styles.buttonentry}>
                    <div class={styles.circle}></div>
                    <div id={styles.lottierocket}>
                        <lottie-player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_dczbeiru.json"></lottie-player>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Intro;
