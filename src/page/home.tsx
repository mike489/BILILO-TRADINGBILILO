import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/home/Products";
import OurCulture from "../components/home/OurCulture";
import WhyTropicalPharma from "../components/home/WhyTropical";
import JoinTeam from "../components/home/JoinUs";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      {/* <Services /> */}
      <Products />
      <OurCulture />
      <WhyTropicalPharma />
      <JoinTeam />
    </div>
  );
};

export default Home;
