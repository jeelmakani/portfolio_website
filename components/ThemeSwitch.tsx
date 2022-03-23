import { Switch, useTheme } from "@nextui-org/react";

import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme as useNextTheme } from "next-themes";

function ThemeSwitch() {
  const { setTheme } = useNextTheme();

  const { isDark, type } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOff={<RiSunFill />}
      iconOn={<RiMoonFill />}
      css={{ padding: "$0" }}
    />
  );
}

export default ThemeSwitch;
