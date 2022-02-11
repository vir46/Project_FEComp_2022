// import React from "react";
import './intro.css';
import Spacevid from './stockgallery/sky.mp4';
import title from './stockgallery/title.png';
import vrlogo from './stockgallery/vr.png';

function Intro(){
    return(
        <div>
        <div onContextMenu={e => e.preventDefault()}>
        <video 
          class="videobackgroundspace"
          autoplay="true"
          loop="true"
          muted="true">
          <source src={Spacevid} type="video/mp4"/>
        </video>
        <image class="title" src={title}></image>
        </div>
            <div class="titlebar">
                <div>
                    <img src={vrlogo} alt="logo" id="vrlogo"/>
                    <img src={title} alt="title" id="titlelogo"/>
                </div>
                <span>Discover the new world  you've never see</span>
                <div class="circle">
                </div>
            </div>
        </div>
    );
}

export default Intro;