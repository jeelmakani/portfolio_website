import { Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import style from "./languageDropdown.module.scss";

function LanguageDropdown() {
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
  ];
  const router = useRouter();

  const { locale } = router;

  const [lang, setLang] = useState("en");

  useEffect(() => {
    locale && setLang(locale);
  }, [locale]);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const changeLanguageHandler = (code: string) => {
    const locale = code;
    router.push(router.pathname, router.asPath, { locale });
    setLang(locale);
  };

  return (
    <div
      className={`flex flex-col ${style.lang} ${
        isDropdownActive && style.active
      }`}
      onMouseEnter={() => setIsDropdownActive(true)}
      onMouseLeave={() => setIsDropdownActive(false)}
    >
      <Tooltip content={lang === "en" ? "English" : "Deutsch"} placement="left">
        <div className={`${style[lang]}`}></div>
      </Tooltip>

      <div className={style.dropdown}>
        {languages
          .filter(({ code }) => code !== lang)
          .map(({ code }) => {
            return (
              <Tooltip
                key={code + "language-selection-dropdown"}
                content={code === "en" ? "English" : "Deutsch"}
                placement="left"
              >
                <div
                  onClick={() => changeLanguageHandler(code)}
                  className={`${style[code]}`}
                ></div>
              </Tooltip>
            );
          })}
      </div>
    </div>
  );
}

export default LanguageDropdown;
