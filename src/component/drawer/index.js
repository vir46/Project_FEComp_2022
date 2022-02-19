import * as React from "react";
import styles from "./index.module.css";
import { Outlet } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

export default function PermanentDrawerLeft() {
  return (
    <div class={styles.container}>
      <div class={styles.drawerhead}>
        <h1>Hello ! User..</h1>
      </div>
      <div class={styles.underhead}>
        <div class={styles.drawer}>
          <div class={styles.draweritem}>
            <img src="https://i.imgur.com/wYnle9j.png" id={styles.profilephoto} alt="profile"></img>
          </div>
          <div class={styles.draweritem}>
            <FaWallet /> Valmoney: <span id={styles.value}>$3,105</span>
          </div>

        </div>
      </div>
    </div>    
  );
}
