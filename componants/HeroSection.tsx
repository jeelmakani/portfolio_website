import React from "react";
import styles from "./HeroSection.module.scss";
import { Col, Row, Text } from "@nextui-org/react";
import profilePic from "../assets/profilePic2.png";
import Image from "next/image";
import HandGIF from "../assets/Hand.gif";
import Typed from "react-typed";

function HeroSection() {
  return (
    <section
      className={`flex justify-center align-center ${styles.heroSection}`}
      aria-label="Hero Section"
    >
      <div className={`${styles.content}`}>
        <Row align="center">
          <Text>
            Hi,
            <span className="wave">
              <Image src={HandGIF} alt="HandGIF" width={20} height={20} />
            </span>
            &nbsp; I'm{" "}
            <span className="header">
              <strong>Jeel Makani</strong>
            </span>
          </Text>
        </Row>
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="responsive"
        />
        <Typed
          style={{
            maxWidth: "100%",
            fontWeight: "bold",
            textAlign: "center",
          }}
          strings={["Front-end Dev,", "ML Engineer,", "Data Scientist."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

        {/* <Text> Machine Learning Engineer </Text> */}
      </div>
    </section>
  );
}

export default HeroSection;
