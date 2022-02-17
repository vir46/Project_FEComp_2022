import React from "react";
import styles from "./faq.module.css";


function Intro(){
    return(
        <div>
            <div class={styles.container}>
                <div class={styles.pagetitle}>
                    <h1>FAQ</h1>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class={styles.content}>
                    <div class={styles.contentdivide}>
                        <h1>What is Valverse?</h1>
                        <p>Valverse is a platform that connect billion of people to the new virtual world.</p>
                    </div>
                    <div class={styles.contentdivide}>
                        <h1>Is it free?</h1>
                        <p>Yes, it is free to use. But to use it u need to register by emailing us.</p>
                    </div>
                    <div class={styles.contentdivide}>
                        <h1>What can i do in here?</h1>
                        <p>You can create your own house, buy a house, interact with others and hang out with your friends.</p>
                    </div>
                    <div class={styles.contentdivide}>
                        <h1>Is it same as metaverse?</h1>
                        <p>No, it is not same as metaverse. It is a new virtual world.</p>
                    </div>
                    <div class={styles.contentdivide}>
                        <h1>How Can I Buy House in here?</h1>
                        <p> You can buy a house by go to our store (Login Needed). You need some virtual money to buy a house called valpoint.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
