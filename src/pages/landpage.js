import React from "react";
import "./landpage.css";
import '@lottiefiles/lottie-player';


function Landingpage(){
    return(
        <div>
            {/* Head Title */}
            <div class="headcontainer">
                <div id="lottierocket">
                    <lottie-player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_n0b0gzpq.json"></lottie-player>
                </div>
            </div>
        </div>
    );
}
export default Landingpage;

