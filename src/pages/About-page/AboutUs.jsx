function AboutUs() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: "url(./images/About-images/about-us.webp)",
      }}
    >
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          At Ambuvians, we are committed to revolutionizing the way healthcare
          organizations operate and deliver patient care. With a deep
          understanding of the complex challenges facing the healthcare
          industry, we have developed a state-of-the-art Healthcare and
          Management System that empowers healthcare providers to optimize their
          operations, enhance patient experiences, and ultimately, save lives.
        </p>
      </div>
      <picture>
        <img src="./assets/images/About-images/about-us.webp" alt="About Us" />
      </picture>
    </div>
  );
}
export default AboutUs;
