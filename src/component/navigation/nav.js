import React from "react";
import "./nav.css";


function Navigasi(){
    return(
        <div class="navcont h-10">
            <nav class="absolute navMenu">
                <a class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20" href="https://github.com">Home</a>
                <a class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20" href="https://github.com">How To?</a>
                <a class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20" href="https://github.com">Login</a>
                <a class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20" href="https://github.com">FAQ</a>
                <a class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20" href="https://github.com">About</a>
                <div class="w-2 h-2 bg-yellow-500 opacity-0 dot"></div>
            </nav>
        </div>
    );
}
export default Navigasi;

