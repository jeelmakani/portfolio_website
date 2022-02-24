import React from "react";
import {
  Avatar,
  Link as NextuiLink,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import style from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Experience",
      to: "/experience",
    },
    {
      name: "Education",
      to: "/education",
    },
    { name: "Blogs", to: "/blogs" },
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
        aria-label="right_section"
      >
        <section
          className={`flex ${style.navLinksSection}`}
          aria-label="Nav Links"
        >
          {routes.map(({ name, to }) => (
            <NextuiLink color="text" key={name}>
              <Link href={to} passHref>
                <article className="Nav_items">{name}</article>
              </Link>
            </NextuiLink>
          ))}
        </section>

        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOff={<RiSunFill />}
          iconOn={<RiMoonFill />}
        />
      </section>
    </nav>
  );
}

export default Navbar;
