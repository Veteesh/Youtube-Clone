import React from "react";
function Nav(){
    return(
        <>
         <nav className="navigation">
            <a href="#">Home</a>
            <a href="#">Like</a>
            <a href="#">Subscribe</a>
         </nav>
         <div id="youtube">
            <img id="logo" src="https://th.bing.com/th/id/OIP.gXDAsM3eyXW3wlU8IMGrfgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
            <h1><span>Y</span>ou<span>T</span>ube</h1>
            <input id="input" type="text" placeholder="Search here" />
         </div>
        </>
    )
}
export default Nav;