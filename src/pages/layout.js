import React from "react";
import { Outlet } from "react-router-dom";
import Navigasi from '../component/navigation/nav.js';


function Landingpage(){
    return(
        <div>
            <Navigasi/>
            <div class="landcontainer">
            <Outlet/>
            </div>
        </div>
    );
}
export default Landingpage;

