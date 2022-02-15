import {
    React,
    useEffect
} from "react";
import styles from "./landpage.module.css";
import titles from '../stockgallery/title.png';
import { Button } from 'react-bootstrap';
import '@lottiefiles/lottie-player';


function Landingpage(){
    
    useEffect(() => {
        var animateButton = function(e) {

            e.preventDefault();
            e.target.classList.remove('animate');
            e.target.classList.add('animate');
            setTimeout(function(){
              e.target.classList.remove('animate');
            },700);
          };
        //   var bubblyButtons = document.getElementById("bubblybutton");
        //   bubblyButtons.addEventListener("click", animateButton, false);
    });
    return(
        <div>
            {/* Head Title */}
            <div class={styles.headcontainer}>
                <img src={titles} alt="title" id={styles.titlelogo}/>
                <Button id={styles.bubblybutton}>hello</Button>
                <div id={styles.lottievr}>
                    <lottie-player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_n0b0gzpq.json"></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;

