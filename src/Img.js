import React from "react";

const Img = (props) => {
  return (
    <div style ={{display:"center"}}>
      <img src={props.src} position= "absolute" height="85px" width="1500px" left="0px" top="73px" background="#263238" />
    </div>
  );
};

export default Img;