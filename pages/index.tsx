import type { NextPage } from "next";
import { Container } from "@nextui-org/react";

import Navbar from "../componants/Navbar";
import HeroSection from "../componants/HeroSection";
import FormSection from "../componants/FormSection";

const Home: NextPage = () => {
  return (
    <>
      <Container justify="center">
        <HeroSection />
        <FormSection />
      </Container>
    </>
  );
};

export default Home;
