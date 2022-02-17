import React, { Component } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Earth from "../../stockgallery/earth.jpg";

class gambarbumi extends Component {
    render(){
        return(
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        { image: {Earth}, speed: -20 },
                        ]}
                    className="aspect-[2/1]"
                >
                <span>hELLo</span>
                </ParallaxBanner>
            </ParallaxProvider>
        )
    }
}

export default gambarbumi;