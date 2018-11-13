import React from "react";
import "../App.css";
import lamp from "../img/lamp.gif"

const Header = (props, context) => {
  console.log(context.network);
  return(
    <div id="lavaHeader">
      <div className="lavaRow" id="headerContent">
          <img id="lamp" src={lamp} alt="" />
          <div className="lavaColumn" id="titleText">
              <h1 id="lavaTitle">Lava</h1>
              <p className="subTitle">Decentralized random number generation on Ethereum.</p>
          </div>
      </div>
      <div className="lavaRow" id="headerContent">
        {/* // <h2>Currently connected to {context.network} network.</h2> */}
      </div>
    </div>
  );
}
export default Header;
