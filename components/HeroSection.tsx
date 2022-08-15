import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Text, Link, Button, Container } from "@nextui-org/react";
import Typed from "typed.js";

import style from "./HeroSection.module.scss";

import en from "../locals/en";
import de from "../locals/de";

import {
  Hand as HandGIF,
  Twitter,
  ProfilePic2 as profilePic,
  Instagram,
  Github,
  Linkedin,
} from "../assets";

function HeroSection() {
  const element = useRef<HTMLSpanElement>(null);

  const router = useRouter();

  const { locale } = router;

  const t = useMemo(() => (locale === "en" ? en : de), [locale]);

  const chagetoEnglish = () => {
    const locale = "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  const changetoGerman = () => {
    const locale = "de";
    router.push(router.pathname, router.asPath, { locale });
  };

  const mailto = () => window.open("mailto:makanijeel@gmail.com");

  const [typed, setTyped] = useState<Typed | undefined>(undefined);

  const initTyped = useCallback(() => {
    if (!element.current) return;

    setTyped(
      new Typed(element.current, {
        strings: ["Front-end Dev", "Data Science", "ML Enthusiast"],
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
      className={`flex justify-center ${style.heroSection}`}
      aria-label="Hero Section"
    >
      <div className={`${style.content}`}>
        <Row align="center">
          <Text className={`${style.textHI}`}>
            Hi,
            <span className="wave">
              <Image src={HandGIF} alt="HandGIF" width={25} height={25} />
            </span>
            &nbsp; {t.iam}
            <span>
              <strong>Jeel Makani</strong>
            </span>
          </Text>
        </Row>
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="responsive"
          width={500}
          height={500}
        />
        <article>
          <span className={`${style.anime}`} ref={element}></span>
        </article>
      </div>

      <section className={`${style.languageSection}`}>
        <Button
          bordered={locale === "de"}
          disabled={locale === "de"}
          color="gradient"
          onClick={changetoGerman}
        >
          Deutsch
        </Button>

        <Button
          bordered={locale === "en"}
          disabled={locale === "en"}
          color="gradient"
          onClick={chagetoEnglish}
        >
          English
        </Button>
      </section>

      <Link
        color="text"
        onClick={mailto}
        className={`${style.__vertical_email1}`}
      >
        makanijeel@gmail.com
      </Link>
      <div
        className={`rounded-social-buttons flex flex-col ${style.__vertical_email2}`}
      >
        <Link
          className={`twitter social-button`}
          href="https://twitter.com/jeelmakani"
        >
          <Twitter />
        </Link>
        <Link
          href="https://www.instagram.com/jeel_makani/"
          className="social-button instagram"
        >
          <Instagram />
        </Link>
        <Link
          href="https://github.com/jeelmakani"
          className="social-button github"
        >
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jeel-makani-b8110816a/"
          className="social-button linkedin"
        >
          <Linkedin />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
