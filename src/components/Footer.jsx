import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const handleClick = () => {
    alert("Coming Soon...");
  };

  const hideForm = () => {
    document.querySelector(".form-close-btn").addEventListener("click", () => {
      document.querySelector(".form").style.display = "none";
    });
  };

  const handleContactUsClick = () => {
    setShowForm(true);
    document.querySelector(".form").style.display = "block";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailInput = document.querySelector("#email");

    if (email.trim() === "") {
      emailInput.setCustomValidity("Email field is required.");
      emailInput.reportValidity();
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
      emailInput.reportValidity();
      return;
    }

    document
      .querySelectorAll(".form-input")
      .forEach((input) => (input.value = ""));
    document.querySelector(".form").innerHTML = `
    <div class="form-item" data-animation="fadeOff">
          <div>
            <figure class="form-logo"><img className="form-logo" loading="lazy" src="images/Footer-images/ambu logo.webp" alt="ambu logo" /></figure>
          </div>
          <div>
            <h1>Thank You</h1>
          </div>
          <div>
            <p class="form-para-1">Our team will get back to you shortly!</p>
          </div>
          <p class="form-para-2">Stay Tuned</p>
        </div>
  `;

    document.querySelector(".form").classList.add("fade1");
    document.querySelector(".form").classList.add("fadeOff");

    setInterval(() => {
      setShowForm(false);
    }, 3000);
  };

  return (
    <div>
      <section id="footer">
        <h1 className="showing-heading">
          India's First Unified Healthcare Services
        </h1>
        <div className="get">
          <h1 className="hidden-heading">
            India's First Unified Healthcare Services
          </h1>
          <h2 className="get-app">Get the app</h2>
          <div className="apk">
            <abbr title="Download Now !">
              <button onClick={handleClick}>
                <div>
                  <img
                    src="images/Footer-images/apple.svg"
                    alt=""
                    className="apple-store-img"
                  />
                </div>
                <div>
                  <p className="apk-p">
                    Download On The <br />
                    <span>App Store</span>
                  </p>
                </div>
              </button>
            </abbr>
            <abbr title="Download Now !">
              <button onClick={handleClick}>
                <div>
                  <img
                    src="images/Footer-images/play-store.svg"
                    alt=""
                    className="play-store-img"
                  />
                </div>
                <div>
                  <p className="apk-p">
                    Get It On <br />
                    <span>Google Play</span>
                  </p>
                </div>
              </button>
            </abbr>
          </div>

          <button
            type="button"
            onClick={handleContactUsClick}
            class="subscribe-button"
          >
            Subscribe Us
          </button>
        </div>
        <div className="Knowus">
          <h2>Know Us</h2>
          <ul>
            <li class="nav-item">
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/about">Enquiry</a>
              </span>
            </li>
            <li>
              <span>
                <a href="https://heyzine.com/flip-book/c538e2deab.html#page/1">
                  Handbook
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="/hiring">Join Us</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="Services">
          <h2>Services</h2>
          <ul>
            <li>
              <span>
                <a href="/services">ALS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">BLS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">PTS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">Mortality Ambulance</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2 className="about-h2">Contact Us</h2>
          <ul>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/google-maps.webp"
                alt="google map icon"
              />
              <span>
                <p>
                  <a
                    href="geo:28.752470765577947, 77.49913956776183"
                    target="_blank"
                    className="add"
                    rel="noreferrer"
                  >
                    4th Floor TBI KIET Group Of Institutions
                    <br />
                    Ghaziabad Delhi NCR <br />
                    201206
                  </a>
                </p>
              </span>
            </li>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/Gmail.webp"
                alt="gmail icon"
              />
              <span>
                <p>
                  <a href="mailto:info@ambuvians.in ">
                    info@ambuvians.in <br />
                  </a>
                  <a href="mailto:contact@ambuvians.in">contact@ambuvians.in</a>
                </p>
              </span>
            </li>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/Ringer Volume.webp"
                alt="ringtone icon"
              />
              <span>
                <p>
                  <a href="tel:+7505853812">
                    7505853812 <br />
                  </a>
                  <a href="tel:+8630729931">8630729931</a>
                </p>
              </span>
            </li>
          </ul>
          <div className="icons">
            <abbr title="instagram" className="first-icon">
              <a
                href="https://www.instagram.com/official.ambuvians/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="images/Footer-images/instagram.webp"
                  alt="instagram icon"
                />
              </a>
            </abbr>
            <abbr title="whatsapp" className="second-icon">
              <a
                href="https://wa.me/+7505853812"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="images/Footer-images/whatsapp.webp"
                  alt="whatsapp icon"
                />
              </a>
            </abbr>
            <abbr title="twitter" className="third-icon">
              <a href="https://www.threads.net/@official.ambuvians">
                <img
                  src="images/Footer-images/twitter.webp"
                  alt="twitter icon"
                />
              </a>
            </abbr>
            <abbr title="linkedin" className="fourth-icon">
              <a href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true">
                <img
                  src="images/Footer-images/linkedin.webp"
                  alt="linkedin icon"
                />
              </a>
            </abbr>
          </div>
        </div>
        <div
          className="form"
          style={{ display: showForm ? "block" : "none" }}
          data-animation="fade"
        >
          <div className="form-close-btn">
            <i
              className="fa-solid fa-xmark form-close-btn "
              onClick={() => hideForm()}
            ></i>
          </div>
          <h1>Subscribe Us</h1>
          <div className="form-item">
            <h3 className="form-title">Join us to get daily updates</h3>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-input"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              title="Please enter a valid email address"
              className="form-input"
            />
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p> &#169;Ambuvians Healthcare Pvt. Ltd.</p>
        <p> &#169;<a href="/privacy">Privacy Policy</a></p>
        <p> &#169;<a href="/terms">Terms and Condition</a></p>
        <p> &#169;<a href="/refund_policy">Refund Policy</a></p>
      </div>
    </div>
  );
}
export default Footer;