import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
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

  return (
    <div>
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
  );
}

export default LanguageDropdown;
