import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import Earth from "../../stockgallery/earth.jpg";
// import desain from './parallaxearth.css';

const gambar1 = "https://wallpaperaccess.com/full/2332357.jpg";

const style = {
    backgroundImage: `url(${gambar1})`,
    height: '100px',
};
class gambarbumi extends Component {
    render(){
        return(          
            <ParallaxProvider>
                <div>
                    <Parallax speed={15} style={ style } translateY={[-20, 10]}>
                        
                    </Parallax>
                </div>
            </ParallaxProvider>
        )
    }
}

export default gambarbumi;