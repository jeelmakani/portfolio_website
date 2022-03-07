import type { NextPage } from "next";
import { Container } from "@nextui-org/react";

import HeroSection from "../components/HeroSection";
import FormSection from "../components/FormSection";

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
