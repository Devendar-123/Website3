import React from "react";
import "./About.css"
const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-img">
          <img src="/Images/about1.jpg" alt="about1" />
        </div>
        <div className="about-description">
          <h1>About Galaxy</h1>
          <p>
            The portfolio of Galaxy Educational Consultants is a conglomerate of
            institutions / colleges / universities from the UK which helps to
            add values and worth in the educational cycle of a student. Accurate
            and correct information have always proved to be reliable and true
            which deliver the services as promised. Galaxy Educational
            Consultants acts as a strong channel with core aim to provide
            paramount opportunities in the academia.
          </p>
          <p>
            The aim is just not to impart knowledge but also to insure that its
            access becomes easy and approachable. Of course, the in-built course
            mechanism ensures that the acquired knowledge is saleable in the
            market opening to apt jobs in turn paving path to a smooth and
            comfortable future. Education has no limit and so Galaxy Educational
            Consultants puts its best so that everyone can share the same sky of
            intellect.
          </p>
          <p>
            We hope to continue in the same direction successfully with our only
            motive being to provide assistance to the youth of today who hold a
            holistic view towards cutting edge competition.
          </p>
        </div>
      </section>

      <section className="partners">
        <h1>Our Partners</h1>
        <div className="partner-cards">
            <img src="/Images/partner1.jpg" alt="1" />
            <img src="/Images/partner2.jpg" alt="2" />
            <img src="/Images/partner3.jpg" alt="3" />
        </div>
      </section>
    </div>
  );
};

export default About;
