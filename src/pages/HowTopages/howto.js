import React from "react";
import styles from "./howto.module.css";


function Intro(){
    return(
        <div>
            <div class={styles.container}>
                <div class={styles.pagetitle}>
                    <h1>User Guide</h1>
                    <h2>How To Use Valverse Platform ?</h2>
                </div>
                <div class={styles.content}>
                    <div>
                        <img class={styles.contentimage} src="https://i.imgur.com/P44Fg5f.png" alt="Virtual Reality Headset"/>
                        <h3>Prepare Your Equipment</h3>
                        <p>You must have a vr headset and a device that supports the VR experience.
                            If you dont have it, you can buy it from our store (Login Required)
                        </p>
                    </div>
                    <div>
                        <img class={styles.contentimage} src="https://i.imgur.com/m8qkIEE.jpg" alt="Sign In"/>
                        <h3>Login to Our Platform</h3>
                        <p>Login to our platform using registered user credentials. If you dont have an account, try contact us via email to user@valverse.team
                        </p>
                    </div>
                    <div>
                        <img class={styles.contentimage} src="https://i.imgur.com/tEUeD2E.jpg" alt="Valverse World"/>
                        <h3>Connect and Experience It !</h3>
                        <p>Since u logined to our platform, u can now play and interact with the other player in the platform.
                            You can also create your own house by buying land from the store and invite many peoples to join.
                            Or u can just buy a land and sell it for higher price.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
