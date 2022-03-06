import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Avatar,
  Container,
  Link as NextuiLink,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { RiMoonFill, RiSunFill, RiArrowDownSLine } from "react-icons/ri";
import useScrollListener from "./hooks/useScrollListener";

import style from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import en from "../locals/en";
import de from "../locals/de";
import LanguageDropdown from "./UI/LanguageDropdown";

function Navbar() {
  const router = useRouter();

  const { locale } = router;

  const t = useMemo(() => (locale === "en" ? en : de), [locale]);

  const routes = [
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
      to: "/experience",
    },
    {
      nameKey: "Qualification",
      to: "/education",
    },
    { nameKey: "Blogs", to: "/blogs" },
  ];

  const { setTheme } = useNextTheme();

  const { isDark, type } = useTheme();

  const [isVisible, setIsVisible] = useState(true);

  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) setIsVisible(false);
    else setIsVisible(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav className={`flex justify-center`}>
      <Container
        lg
        className={`${style.nav} ${isVisible ? "" : style.navHidden}`}
      >
        <section aria-label="left_section">
          <Avatar src="https://nextui.org/avatars/avatar-3.png" />
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

          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOff={<RiSunFill />}
            iconOn={<RiMoonFill />}
            css={{ padding: "$0" }}
          />
        </section>
      </Container>
    </nav>
  );
}

export default Navbar;
