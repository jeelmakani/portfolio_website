import React, { useCallback } from "react";
import { Text, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

import { RiArrowLeftLine } from "react-icons/ri";

const Custom404: React.FC = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <section
      className={`flex flex-col gap-1em justify-center align-center h-100vh`}
      aria-label="404-Resource not found"
    >
      <section className="flex align-center">
        <Text margin={"0 1em 0 0"} h2>
          404
        </Text>

        <Text> This page could not be found. </Text>
      </section>

      <article className="flex justify-start">
        <Text h3>
          <Link
            color="text"
            onClick={goBack}
            css={{ textGradient: "45deg, $blue500 -20%, $pink500 100%" }}
          >
            Go Back {"←"}
          </Link>
        </Text>
      </article>
    </section>
  );
};

export default Custom404;
