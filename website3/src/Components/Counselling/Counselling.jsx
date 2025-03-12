import React from "react";
import "./Counselling.css"
const Counselling = () => {
  return (
    <div className="counselling-container">
      <div className="counselling-img">
        <img src="/Images/counselling.jpg" alt="counselling" />
      </div>
      <div className="counselling-text">
        <h2>Career Counseling</h2>
        <span>
          Nowadays, students have a wealth of information available to them
          regarding various courses and study destinations. However, to make an
          informed decision, it is essential to seek guidance from an expert in
          the field of overseas education who can help them understand their
          objectives. Our team of education consultants is well-equipped to
          guide students through every step of the admission process, from
          setting educational goals to selecting the appropriate course and
          institution. With our thorough guidance, students can navigate the
          admission process with confidence and ease.
        </span>
      </div>
    </div>
  );
};

export default Counselling;
