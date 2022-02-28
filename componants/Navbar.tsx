import React, { useMemo } from "react";
import {
  Avatar,
  Link as NextuiLink,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

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
      nameKey: "experience",
      to: "/experience",
    },
    {
      nameKey: "education",
      to: "/education",
    },
    { nameKey: "Blogs", to: "/blogs" },
  ];

  const { setTheme } = useNextTheme();

  const { isDark, type } = useTheme();

  return (
    <nav className={`flex justify-between w-full ${style.nav}`}>
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
    </nav>
  );
}

export default Navbar;
