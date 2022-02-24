import type { NextPage } from "next";
import Navbar from "../componants/Navbar";
import HeroSection from "../componants/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default Home;
