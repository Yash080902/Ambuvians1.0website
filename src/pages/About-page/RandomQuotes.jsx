import React, { useEffect, useState } from "react";

const RandomQuotes = () => {
  const quotes = [
    { author: "Your health, our commitment." },
    { author: "Healthy citizens are the greatest asset any country can have." },
    {
      author:
        "Every single journey of your life starts with a healthy mind and a healthy journey.",
    },
    {
      author:
        "Healthcare is not a job; it's a noble mission to save lives and improve well-being.",
    },
    {
      author:
        "Healthcare is the heart of our community, and we're here to keep your heart healthy.",
    },
    {
      author:
        "Every patient is a story waiting to be told, and we're here to help write the happiest chapter",
    },
    { author: "Your health is our priority, your well-being is our mission." },
    {
      author:
        "In the world of healthcare, every small act of kindness makes a big difference.",
    },
    { author: "Together, we're building a healthier, happier tomorrow" },
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `- ${quote.author}`;
  };

  useEffect(() => {
    generateQuote();
    const interval = setInterval(generateQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="quotes">
        <p id="quote-text">
          Your health journey, our priority - that's the Ambuvians way
        </p>
      </div>
    </div>
  );
};

export default RandomQuotes;
