import React from "react";
import { Outlet } from "react-router-dom";
import Navigasi from '../component/navigation/nav.js';
import Footer from '../component/footer/footer.js';

function Landingpage(){
    return(
        <div>
            <Navigasi/>
            <div class="landcontainer">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}
export default Landingpage;

