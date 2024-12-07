import React from "react";
import { Link, Outlet } from "react-router-dom";

const Paths=()=>{
    return(
        <div className="pathWrapper">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>   
                    <p> 
                 Magni commodi delectus, 
                    nobis aliquam necessitatibus impedit, tempore vitae sint ipsa placeat exercitationem nulla sunt deserunt
                    tempora similique eum dolore dolor, debitis culpa deleniti consequatur 
                    obcaecati sequi laudantium. Fugit eveniet praesentium id corporis aliquam fuga in beatae aspernatur sed ullam,
                    alias excepturi.  
                </p>
                  <div className="btnGroup">
                    <Link to="frontend">Frontend</Link>
                    <Link to="backend">Backend</Link>
                  </div>
           <Outlet/>

        </div>
    );
};

export default Paths;