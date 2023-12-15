import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

import "./Title.css";

function Title() {
  const quotes = [
    { author: "Better Healthcare, Better Tomorrow." },
    { author: "Your Loved Ones Deserve Only The Best." },
    {
      author: "You cannot enjoy your wealth, if you cannot enjoy your health.",
    },
    { author: "Happiness begins with good health." },
    { author: "Try these also okay according to the need." },
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.querySelector(".quote-text").textContent = `${quote.author}`;
  };

  useEffect(() => {
    generateQuote();
    const interval = setInterval(generateQuote, 5000); // Adjust the interval time as needed (e.g., 2000 ms for 2 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <!-- first section --> */}
      <div className="First-section">
        {/* div for the right image and background  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="right"
        >
          <img
            loader="lazy"
            className="am"
            src="./images/Home-images/bgi.webp"
            alt="ambulance"
          />
        </motion.div>
        {/* div for left text and facts button  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="left"
        >
          <a id="ambuvians">AMBUvians</a>
          <a className="slogan quote-text">
            India's First One-Stop Solution of all medical problems
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Title;
