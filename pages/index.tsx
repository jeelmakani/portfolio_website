import type { NextPage } from "next";
import Navbar from "../componants/Navbar";
import HeroSection from "../componants/HeroSection";
import FormSection from "../componants/FormSection";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FormSection />
    </>
  );
};

export default Home;
