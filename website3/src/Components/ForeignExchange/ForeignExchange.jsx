import React from "react";
import "./Foreign.css"
const ForeignExchange = () => {
  return (
    <div className="foreign-container">
      <div className="foreign-img">
        <img src="/Images/for.jpg" alt="counselling" />
      </div>
      <div className="foreign-text">
        <h2>Foreign Exchange</h2>
        <span>
          Our organization provides support for converting INR (Indian Rupee)
          into other foreign currencies through authorized financial
          institutions and dealers.
        </span>
        <span>
          Our organization assists students in obtaining forex (foreign
          exchange) cards, which can be used for making transactions in foreign
          currencies while traveling abroad. We offer guidance and support for
          selecting the most suitable forex cards from authorized financial
          institutions, based on the student's requirements and destination
          country.
        </span>
      </div>
    </div>
  );
};

export default ForeignExchange;
