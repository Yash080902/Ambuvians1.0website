import React, { useEffect, useState } from "react";

function CompanyQuote() {
  const [titleIndex, setTitleIndex] = useState(1);

  const title = "Faster-Ontime-Reliable";

  useEffect(() => {
    const typeWriter = () => {
      const newTitle = title.slice(0, titleIndex);
      setTitleIndex(titleIndex > title.length ? 1 : titleIndex + 1);
      document.querySelector(".main_heading").innerText = newTitle;
    };

    const interval = setInterval(typeWriter, 80);

    return () => {
      clearInterval(interval);
    };
  }, [titleIndex]);
  return (
    <div>
      <p className="company-quote">
        India’s 1st One-Stop and Advanced Healthcare Services{" "}
      </p>
      {/* Feature */}
      <p className="main_heading"></p>
    </div>
  );
}
export default CompanyQuote;
