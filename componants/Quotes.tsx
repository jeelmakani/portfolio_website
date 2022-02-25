import React, { useEffect, useState, useRef } from "react";
import style from "./Quotes.module.scss";
import config from "./config";
import choiceQuotes from "./lines";
import { Text } from "@nextui-org/react";

enum Phase {
  GetQuote = 1,
  ShowQuote = 2,
  QuoteVisible = 3,
  HideQuote = 10,
}

async function sleep(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

const Quotes = () => {
  const [quote, setQuote]: [string, Function] = useState(choiceQuotes[0]);
  const [quoteVisible, setQuoteVisible]: [boolean, Function] = useState(true);
  const quoteVisibleRef: React.MutableRefObject<boolean> = useRef(false);
  const quoteNumberRef: React.MutableRefObject<number> = useRef(0);

  const showQuote = (show: boolean) => {
    quoteVisibleRef.current = show;
    setQuoteVisible(quoteVisibleRef.current);
  };

  useEffect(() => {
    const getQuote = async (
      callback: (quote: string) => void
    ): Promise<void> => {
      await sleep(750);

      quoteNumberRef.current =
        quoteNumberRef.current < choiceQuotes.length - 1
          ? quoteNumberRef.current + 1
          : 0;
      callback(choiceQuotes[quoteNumberRef.current]);
    };

    let count: number = Phase.QuoteVisible;

    setInterval(() => {
      let phase = (count % 10) + 1;

      if (phase === Phase.GetQuote) {
        getQuote((quote) => setQuote(quote));
      } else if (phase === Phase.ShowQuote) {
        showQuote(true);
      } else if (phase === Phase.HideQuote) {
        showQuote(false);
      }
      count = count + 1;
    }, config.interval);
  }, []);

  return (
    <div className={`${quoteVisible ? style.quote : style.hidden}`}>
      <div className={`${quoteVisible ? style.fadeintext : style.hidden}`}>
        <Text
          h3
          size={40}
          css={{
            textGradient: "45deg, $purple500 -20%, $pink500 100%",
          }}
          weight="bold"
        >
          {quote}
        </Text>
      </div>
    </div>
  );
};

export default Quotes;
