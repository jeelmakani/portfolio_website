import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Avatar,
  Container,
  Link as NextuiLink,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


import { en, de } from "../locals";
import { ProfilePic1, ProfilePic3 } from "../assets";

import { useScrollListener, useOnClickOutside } from "./hooks";
import LanguageDropdown from "./UI/LanguageDropdown";

import style from "./Navbar.module.scss";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  interface route {
    nameKey: string;
    to: string;
  }
  const router = useRouter();

  const { locale } = router;

  const t = useMemo<Record<string, string>>(
    () => (locale === "en" ? en : de),
    [locale]
  );

  const routes: route[] = [
    {
      nameKey: "Home",
      to: "/  ",
    },
    {
      nameKey: "projects",
      to: "/projects",
    },
    {
      nameKey: "Skills",
      to: "/skills",
    },
    {
      nameKey: "Qualifications",
      to: "/qualifications",
    },
    { nameKey: "Blogs", to: "/blogs" },
  ];

  const { isDark, type } = useTheme();

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [isSideNavOpen, setIsSidebarOpen] = useState<boolean>(false);

  const navRef: React.MutableRefObject<null> = useRef<null>(null);

  useOnClickOutside(navRef, () => setIsSidebarOpen(false));

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      if (isSideNavOpen) body.style.overflow = "hidden";
      else body.style.overflow = "visible";
    }
  }, [isSideNavOpen]);

  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 60 && scroll.y - scroll.lastY > 0) setIsVisible(false);
    else setIsVisible(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav className={`flex justify-center`}>
      <Container
        lg
        className={`${style.nav} ${isVisible ? "" : style.navHidden}`}
      >
        <section className={style.left_section} aria-label="left_section">
          <article
            className={style.hamburgerMenu}
            onClick={(e) => setIsSidebarOpen(!isSideNavOpen)}
          >
            <span className={style.આડોલીટો}></span>
            <span className={style.આડોલીટો}></span>
            <span className={style.આડોલીટો}></span>
          </article>
          <article className={`${style.avatar}`}>
            {isDark ? (
              <Image
                src={ProfilePic3}
                alt="Avatar dark"
                height={38}
                width={38}
              />
            ) : (
              <Image
                src={ProfilePic1}
                alt="Avatar light"
                height={38}
                width={38}
              />
            )}
          </article>
        </section>

        <section
          className={`flex align-center ${style.navbarRightSection}`}
          aria-label="middle_section"
        >
          <section
            className={`flex align-center ${style.navLinksSection}`}
            aria-label="Nav Links"
          >
            {routes.map(({ nameKey, to }) => (
              <NextuiLink color="text" key={nameKey}>
                <Link href={to} passHref>
                  <article className={`${style.Nav_items}`}>
                    {t[nameKey] || nameKey}
                  </article>
                </Link>
              </NextuiLink>
            ))}
          </section>
        </section>

        <section
          className={`flex align-center ${style.navbarRightSection}`}
          aria-label="right_section"
        >
          <div className={`${style.languageselectionarea}`}>
            <LanguageDropdown />
          </div>
          <ThemeSwitch />
        </section>
      </Container>

      <section
        className={`flex ${style.sideNav} ${isSideNavOpen ? style.sideNavOpen : ""
          }`}
        ref={navRef}
      >
        <div className="flex flex-col gap-1em">
          {routes.map(({ nameKey, to }) => (
            <Text
              h3
              key={nameKey}
              css={{ cursor: "pointer" }}
              onClick={() => {
                setIsSidebarOpen(false);
                router.push(to);
              }}
            >
              <article className={`${style.sidenavitems}`}>
                {t[nameKey] || nameKey}
              </article>
            </Text>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
