import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import style from "./languageDropdown.module.scss";

function LanguageDropdown() {
  const languages = useMemo(
    () => [
      { code: "en", name: "English" },
      { code: "de", name: "Deutsch" },
    ],
    []
  );

  const router = useRouter();

  const { locale } = router;

  const [lang, setLang] = useState("en");

  const chagetoEnglish = () => {
    const locale = "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  const changetoGerman = () => {
    const locale = "de";
    router.push(router.pathname, router.asPath, { locale });
  };

  // useEffect(() => {
  //   locale && setLang(locale);
  // }, [locale]);

  // const [isDropdownActive, setIsDropdownActive] = useState(false);

  // const changeLanguageHandler = () => {
  //   const locale = code;
  //   router.push(router.pathname, router.asPath, { locale });
  //   setLang(locale);
  // };

  return (
    <div
    // className={`flex flex-col ${style.lang} ${
    //   isDropdownActive && style.active
    // }`}
    // onMouseEnter={() => setIsDropdownActive(true)}
    // onMouseLeave={() => setIsDropdownActive(false)}
    >
      {/* <Tooltip content={lang === "en" ? "English" : "Deutsch"} placement="left">
        <div className={`${style[lang]}`}></div>
      </Tooltip> */}
      {/* <div className={style.dropdown}> */}
      {/* {languages
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
                >
                  {code.toUpperCase()}
                </div>
              </Tooltip>
            );
          })} */}
      <Button.Group size="sm" color="gradient">
        <Button
          ghost={locale === "en"}
          disabled={locale === "en"}
          onClick={chagetoEnglish}
        >
          <Tooltip
            key="language-selection"
            content="English"
            placement="bottom"
          >
            English
          </Tooltip>
        </Button>
        <Button></Button>
        <Button
          ghost={locale === "de"}
          disabled={locale === "de"}
          onClick={changetoGerman}
        >
          <Tooltip
            key="language-selection-deutsch"
            content="Deutsch"
            placement="bottom"
          >
            Deutsch
          </Tooltip>
        </Button>
      </Button.Group>
    </div>
    // </div>
  );
}

export default LanguageDropdown;
