import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";
const data = [
  { id: 1, image: "/Images/hero2.jpg" },
  { id: 2, image: "/Images/hero1.jpg" },
  { id: 3, image: "/Images/hero3.jpg" },
  { id: 4, image: "/Images/hero4.jpg" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div>
      <div className="image-container">
        <div className="image-wrapper">
          <div>
            <img
              src={data[currentIndex].image}
              alt={data.id}
              className="image fade-animation"
            />
          </div>

          <button className="corner-button bottom-left" onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button className="corner-button bottom-right" onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className="content1">
        <div>
            <h1>Galaxy Educational Consultants</h1>
            <p>
            The portfolio of Galaxy Educational Consultants is a conglomerate of
            institutions / colleges / universities from the UK which helps to add
            values and worth in the educational cycle of a student. Accurate and
            correct information have always proved to be reliable and true which
            deliver the services as promised. Galaxy Educational Consultants acts
            as a strong channel with core aim to provide paramount opportunities
            in the academia.
            </p>
            <p>
            The aim is just not to impart knowledge but also to insure that its
            access becomes easy and approachable...
            </p>
            <button>Read More</button>
        </div>
        <div className="content-img">
            <img src="/Images/body1.jpg" alt="Image1" />
        </div>
      </div>

        <h1 style={{textAlign:"center", marginBottom:"40px", marginTop:"40px"}}>WHY CHOOSE US?</h1>
      <div className="card-content">
        <div className="cards">
            <div className="card">
                <img src="/Images/body2.jpg" alt="image2" />
                <p>Free Expert Counseling Services</p>
            </div>
        </div>
        <div className="cards">
            <div className="card">
                <img src="/Images/body3.jpg" alt="image3" />
                <p>Right choice Country
                and Unviersity</p>
            </div>
        </div>
        <div className="cards">
            <div className="card">
                <img src="/Images/body4.jpg" alt="image4" />
                <p>Application Editing
                and Processing</p>
            </div>
        </div>
        <div className="cards">
            <div className="card">
                <img src="/Images/body5.jpg" alt="image5" />
                <p>Funding, Visa and
                Pre-Departure Prep</p>
            </div>
        </div>
      </div>
        <section className="counter-section">
            <div className="container">
                <div className="row">
                    <div className="img-1">
                        <img src="/Images/img1.png" alt="1" />
                    </div>
                    <div>
                        <span>10500</span><br />
                        <span>Students Successful Admission</span>
                    </div>
                    <div className="img-1">
                        <img src="/Images/img2.png" alt="2" />
                    </div>
                    <div>
                        <span>100%</span><br />
                        <span>Customer Satisfaction</span>
                    </div>
                    <div className="img-1">
                        <img src="/Images/img3.png" alt="3" />
                    </div>
                    <div>
                        <span>15</span><br />
                        <span>Years of Expertise</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row2">
                    <div className="img-2">
                        <img src="/Images/img4.png" alt="4" />
                    </div>
                    <div>
                        <span>850</span><br />
                        <span>Universities Partnership</span>
                    </div>
                    <div className="img-2">
                        <img src="/Images/img5.png" alt="5" />
                    </div>
                    <div>
                        <span>100%</span><br />
                        <span>100%
                        Scholarship Success Rate</span>
                    </div>
                    <div className="img-2">
                        <img src="/Images/img6.png" alt="6" />
                    </div>
                    <div>
                        <span>645</span><br />
                        <span>Institutional Partnership</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="country">
          <h1>TOP COUNTRIES</h1>
          <div className="country-list">
            <img src="/Images/france.jpg" alt="1" />
            <img src="/Images/usa.jpg" alt="2" />
            <img src="/Images/uk.jpg" alt="3" />
            <img src="/Images/canada.jpg" alt="4" />
            <img src="/Images/australia.jpg" alt="5" />
            <img src="/Images/germany.jpg" alt="6" />
            <img src="/Images/spain.jpg" alt="7" />
            <img src="/Images/singapore.jpg" alt="8" />
            <img src="/Images/malaysia.jpg" alt="9" />
            <img src="/Images/dubai.jpg" alt="10" />
            <img src="/Images/italy.jpg" alt="11" />
            <img src="/Images/ireland.jpg" alt="12" />
          </div>
        </section>

        <section className="uk">
          <div className="description">
            <h1>STUDY IN UK</h1>
            <ul>
              <li>Top study destinations in the UK for Indian student</li>
              <li>Higher studies in uk is more cost - effective compared to the USA</li>
              <li>2 Years stay back for student visa in uk</li>
              <li>20 Hours / week -Part time Jobs for International Students</li>
              <li>The UK offers government scholarships for Indian students to study in uk</li>
              <li>The UK provides 1 year Masters Program for international students</li>
              <li>There are 10 UK universities in the top 100 world ranking universities list</li>
            </ul>
            <button>Read More</button>
          </div>
          <div className="uk-img">
            <img src="/Images/uk1.jpg" alt="uk" />
          </div>
        </section>
        <section className="uk">
        <div className="uk-img">
            <img src="/Images/fr.jpg" alt="france" />
          </div>

          <div className="description1">
            <h1>STUDY IN FRANCE</h1>
            <ul>
              <li>Strong industry networks and partnerships</li>
              <li>2 Years stay back for student visa in France</li>
              <li>20 hrs part time jobs for international students</li>
              <li>Study with 4 to 6 months internships</li>
              <li>Government of France scholarships / France universities scholarships available</li>
              <li>There 20 triple accredited business school / university in France.</li>
              <li>Study in France without IELTS</li>
            </ul>
            <button>Read More</button>
          </div>
          
        </section>
        <section className="uk">
          
          <div className="description">
            <h1>STUDY IN USA</h1>
            <ul>
              <li>Top destinations for Indian student is Study in America</li>
              <li>USA Provides 1 to 3 Years study and work visa in USA (according to the course, one have selected).</li>
              <li>STEM (Science, Technology, Engineering & Mathematics) courses are naturally of high demand in the USA</li>
              <li>The universities scholarships for indian students in USA</li>
              <li>Cost of studying MS in USA for Indian students is bigger than UK</li>
            </ul>
            <button>Read More</button>
          </div>
          <div className="uk-img">
            <img src="/Images/usa (1).jpg" alt="france" />
          </div>

        </section>
        <section className="uk">

        <div className="uk-img">
            <img src="/Images/can.jpg" alt="france" />
          </div>
        <div className="description1">
          <h1>STUDY IN CANADA</h1>
          <ul>
            <li>An international student studying in Canada can work up to 20 hours a week part-time.</li>
            <li>Many more Canada universities in the top 100 world ranking universities list</li>
            <li>2 Years stay back for Canada study visa</li>
            <li>The Canada offers government scholarships / University Scholarships for Indian students to study in Canada</li>
            <li>1 year Masters Course in Canada</li>
          </ul>
            <button>Read More</button>
          </div>
        </section>

        <section className="uk">
          <div className="description">
            <h1>STUDY IN AUSTRALIA</h1>
            <ul>
              <li>Australian Universities consistently ranks among top 100 in the world universities in global rankings such as Times Higher Education, QS and Shangai Rankings.</li>
              <li>An international student studying in Australia can work up to 20 hours a week part-time.</li>
              <li>The Australia offers government scholarships for international students to study in Australia</li>
              <li>Australia Provides 1 to 5 Years study and work visa in Australia (according to the course, one have selected).</li>
              <li>1 year Masters Course in Australia</li>
            </ul>
            <button>Read More</button>
          </div>
          <div className="uk-img">
            <img src="/Images/aus.jpg" alt="france" />
          </div>
        </section>
    </div>
  );
};

export default Home;
