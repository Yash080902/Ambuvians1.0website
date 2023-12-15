function WhyChooseUS() {
  return (
    <div>
      <div
        className="choose-us"
        style={{
          backgroundImage: "url(./images/About-images/choose-us-image.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="choose-text">
          <h2>Why Choose Us?</h2>
          <div className="choose-img">
            <div className="img-one">
              <img
                className="scale"
                src="./images/About-images/img-one.webp"
                alt="patient first policy"
              />
              <p>Patient first policy</p>
            </div>
            <div className="img-two">
              <img
                className="scale"
                src="./images/About-images/img-two.webp"
                alt="Emergency assistance time of 15 minutes or less"
              />
              <p>Emergency assistance time of 15 minutes or less</p>
            </div>
            <div className="img-three">
              <img
                className="scale"
                src="./images/About-images/img-three.webp"
                alt="24/7 support"
              />
              <p>24/7 Support</p>
            </div>
            <div className="img-four">
              <img
                className="scale"
                src="./images/About-images/img-four.webp"
                alt="customize and Reliable"
              />
              <p>Customize and Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
