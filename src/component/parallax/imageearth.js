import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const gambar1 = "https://wallpaperaccess.com/full/2332357.jpg";

class gambarbumi extends Component {
    render(){
        return(          
            <ParallaxProvider>            
                <Parallax speed={5} bgImage={ gambar1 } translateY={[-20, 10]}>
                  {/* Ini buat nampilin gambar */}
                </Parallax>
            </ParallaxProvider>
        )
    }
}

export default gambarbumi;