import React from "react";
var left = require("../assets/figma/left.png");
var middle = require("../assets/figma/middle.png");
var right = require("../assets/figma/right.png");
const Home = () => {
  return(
    <div>
      <div>
        <img style={{width:'33.3%'}} src={right}/>
        <img style={{width:'33.3%'}} src={middle}/>
        <img style={{width:'33.3%'}} src={left}/>
      </div>
    </div>
    );
};

export default Home;
