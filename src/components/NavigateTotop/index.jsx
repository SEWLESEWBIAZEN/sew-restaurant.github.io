import React from "react";
import { BsArrowUp } from "react-icons/bs";

import "./style.css";

const index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page smoothly
  };
  return (
    <div className="app__bg">
      <div className="app__navigatetotop-icon_container">
        <BsArrowUp
          className="app__navigatetotop-icon"
          color="#fff"
          fontSize={20}
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default index;
