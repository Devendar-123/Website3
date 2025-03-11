import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div footer-info>
          <h2>Head Office - Chennai</h2>
          <address>
            No 82,Anna Valagam,2nd Floor, Arcot Road, Kodambakkam <br />
            <br />
            Chennai -600024, Tamil Nadu, India <br />
            <br />
            Tele: +91 44 4282 9406 | Mobile: 99622 44333 <br />
            <br />
            Email: chennai@galaxy-edu.com | Website: www.galaxy-edu.com <br />
            <br />
            <button>
              <a href="https://goo.gl/maps/UrjNLT2n9NtpKqpD9">
                <p>Location Map</p>
              </a>
            </button>
          </address>
        </div>
        <div className="footer-logo">
          <img src="/Images/logo-w.png" alt="logo" />
        </div>
      </div>
      <div className="address-info">
        <div className="domestic">
          <address>
            <h2>Domestic Office:</h2> <br />
            Coimbatore <br />
            Ph: +91 99529 99464 <br />
            Email: bala@galaxyedugroup.com <br /><br />
            Pondicherry <br />
            Ph:+91 99622 34333 / 0413-2247129 <br />
            Email: pondy@galaxy-edu.com <br /><br />
            Pattukottai <br />
            Ph:+91 7708680106 / 8939245050 <br />
            Email: muthu@galaxyedugroup.com <br /><br />
            Madurai <br />
            Ph: + 91 73970 08503 <br />
            Email: madurai@galaxyedugroup.com <br /><br />
            Thanjavur <br />
            Ph: +91 6381089559, 96261 25453 <br />
            Email: ram@galaxyedugroup.com <br /><br />
            Hyderabad <br />
            Ph: +91 82978 99919 <br />
            Email: hyderabad@galaxyedugroup.com <br /><br />
            Kerala <br />
            Ph: +91 8891345107 / 8086506999 <br />
            Email: rakhi@galaxyedugroup.com <br /><br />
          </address>
        </div>
        <div className="international">
          <address>
            <h2>International Office</h2> <br />
            France <br />
            Ph: +33 - 621002114 <br />
            Email: ravichandra.@gmail.com <br /><br />
            UK <br />
            Ph: 00 44 (0) 2085488920 <br />
            00 44 (0)7983396173 <br />
            Email: venkat@galaxygroups.co.uk <br />
            <br />
            USA <br />
            Ph: +1 (779) 423-8516 <br />
            Email: vidya@galaxyedugroup.com <br />
            Sri Lanka <br />
            Ph: +94 - 774740040 <br />
            E.mail: International.@ymail.com <br />
          </address>
        </div>
        <div className="form">
          <h4>All - in one guide for your Study Abroad needs</h4>
          <p>Fill this details and take the first step to a global career</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Enter Your Name"/>
            </div>
            <div className="form-group">
              <input type="email"  placeholder="Enter Your Email" />
            </div>
            <div className="form-group">
              <input type="text"  placeholder="Enter Your Phone Number"/>
            </div>
            <div className="form-group">
              <input type="text"  placeholder="Enter Your Course"/>
            </div>
            <div className="form-group">
              <select name="country" id="country">
                <option value="">Select Your Country</option>
                <option value="Uk">Uk</option>
                <option value="">France</option>
                <option value="">USA</option>
                <option value="">Canada</option>
                <option value="">Australia</option>
                <option value="">New Zealand</option>
                <option value="">Ireland</option>
                <option value="">Germany</option>
                <option value="">Sweden</option>
                <option value="">NetherLands</option>
                <option value="">Italy</option>
                <option value="">Singapore</option>
                <option value="">Malaysia</option>
              </select>
            </div>
            <div className="form-group">
              <select name="intake" id="intake">
                <option value="">Choose Your Preferred Intake</option>
                <option value="">September 2025</option>
                <option value="">January 2026</option>
                <option value="">Septembaer 2026</option>
              </select>
            </div>

            <div className="form-group">
              <iframe
                title="reCAPTCHA"
                width="304"
                height="78"
                role="presentation"
                name="a-h2lgzw9qpnje"
                frameborder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdZDjsmAAAAAK3aiNSSb0QsNlW_NlO4JN3WczeJ&amp;co=aHR0cHM6Ly9nYWxheHktZWR1LmNvbTo0NDM.&amp;hl=en&amp;v=EGO3I7Q26cZ-jBw3BEtzIx7-&amp;size=normal&amp;cb=4xewcqlwc4xk"
              ></iframe>
            </div>
            <div className="form-group">
              <button type="submit" >BOOK YOUR FREE APPOINTMENT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
