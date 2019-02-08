import "./Main.scss";
import React from "react";




const fadeOut = () => {
  setTimeout(()=>{
    const initBody = document.getElementById('content-init');
    initBody.classList.toggle('hidden');
  },4000);
}



const initApp = (props) => {

  fadeOut()
  return (
    <div id="content-init" className="main">
      <div className="main-box">
      <div className="animation-init">
        <canvas id="c"></canvas>
      </div>
        <div className="main-box-title">
          <h1 className="fw-100">{props.init}</h1>
        </div>
      </div>
    </div>
    )

  
}




export default initApp;
