import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className={props.bgClass}>
        <div className="text-content">
          <h1 className="moving-btn">{props.title}</h1>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Header;
