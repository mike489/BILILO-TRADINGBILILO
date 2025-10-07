import HeroAbout from "../components/AboutUs/HeroAbout";
import Welcome from "../components/AboutUs/About";
import GetInTouch from "../components/AboutUs/GetInTouch";
import Services from "../components/AboutUs/Services";
import OurCultureAbout from "../components/AboutUs/OurCultureAbout";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroAbout />
      <Welcome />
      <Services />
      <OurCultureAbout />
      <GetInTouch />
    </div>
  );
};

export default AboutUs;
