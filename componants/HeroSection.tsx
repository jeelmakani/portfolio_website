import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./HeroSection.module.scss";
import { Row, Text, Link } from "@nextui-org/react";
import profilePic from "../assets/profilePic2.png";
import Image from "next/image";
import HandGIF from "../assets/Hand.gif";
import Typed from "typed.js";
import facebookIcon from "../assets/icons8-facebook.gif";
import linkedinIcon from "../assets/icons8-linkedin-2.gif";
import twitterIcon from "../assets/icons8-twitter.gif";

function HeroSection() {
  const element = useRef<HTMLSpanElement>(null);

  const mailto = () => {
    window.open("mailto:makanijeel@gmail.com");
  };

  const [typed, setTyped] = useState<Typed | undefined>(undefined);

  const initTyped = useCallback(() => {
    // setTimeout(() => {
    //   if (typed) return;
    //   initTyped();
    // }, 200);

    if (!element.current) return;

    setTyped(
      new Typed(element.current, {
        strings: ["Front-end Dev", "Data Scientist", "ML engineer"],
        startDelay: 1,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 50,
        loop: true,
        showCursor: false,
      })
    );
  }, []);

  useEffect(() => {
    setTimeout(initTyped, 200);

    return () => typed?.destroy();
  }, []);

  return (
    <section
      className={`flex justify-center align-center ${styles.heroSection}`}
      aria-label="Hero Section"
    >
      <div className={`${styles.content}`}>
        <Row align="center">
          <Text className={`${styles.textHI}`}>
            Hi,
            <span className="wave">
              <Image src={HandGIF} alt="HandGIF" width={25} height={25} />
            </span>
            &nbsp; I&apos;m{" "}
            <span>
              <strong>Jeel Makani</strong>
            </span>
          </Text>
        </Row>
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="responsive"
        />
        <article>
          <span className={`${styles.anime}`} ref={element}></span>
        </article>
      </div>
      <Link onClick={mailto} className={`${styles.__vertical_email1}`}>
        makanijeel@gmail.com
        &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
      </Link>
      <div className={`${styles.__vertical_email2}`}>
        {/* <Image src={facebookIcon} alt="fb" width={30} height={30} />
        <br />
        <Image src={linkedinIcon} alt="ln" width={30} height={30} />
        <br />
        <Image src={twitterIcon} alt="tw" width={30} height={30} /> */}
      </div>
    </section>
  );
}

export default HeroSection;
