import React from "react";
import "./scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");

    // When the scroll is higher than 569 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default Scrollup;
