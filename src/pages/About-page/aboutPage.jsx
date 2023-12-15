import "./aboutPage.css";
import MeetOurTeam from "./MeetOurTeam";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Title from "./Title";
import AboutUs from "./AboutUs";
import WhyChooseUS from "./WhyChooseUS";
import CompanyQuote from "./CompanyQuote";
import RandomQuotes from "./RandomQuotes";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="about-page-full-section"
        style={{
          paddingLeft: "0vh",
          paddingRight: "0vh",
          marginTop: "7.5vh",
        }}
      >
        <Title />
        <CompanyQuote />
        <AboutUs />
        <RandomQuotes />
        <WhyChooseUS />
        <MeetOurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default About;
