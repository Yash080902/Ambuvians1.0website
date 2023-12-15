import React from "react";

import "./Partners.css";

function Partners() {
  return (
    <div>
      <div className="ourPartners">
        <a>Our Partners</a>
      </div>
      <div className="partners">
        <a href="/" className="side-partner">
          <img loader="lazy" src="./images/Home-images/school.webp" alt="" />
          <figcaption>St. R. C. Convent School</figcaption>
        </a>
        <a href="https://www.kiet.edu/">
          <img loader="lazy" src="./images/Home-images/kiet.webp" alt="" />
          <figcaption>KIET Group Of Institutions</figcaption>
        </a>
        <a href="/">
          <img loader="lazy" src="./images/Home-images/club.webp" alt="" />
          <figcaption>Scoieo-Tech Innovation Club</figcaption>
        </a>

        <a href="https://www.teific.in" className="side-partner">
          <img loader="lazy" src="./images/Home-images/teific.webp" alt="" />
          <figcaption>Teific</figcaption>
        </a>
      </div>
    </div>
  );
}

export default Partners;
