/* eslint-disable @next/next/no-img-element */
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import GradientLeft from "../assets/GradientLeft";
import GradientRight from "../assets/GradientRight";
import style from "./Layout.module.scss";

type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      {/* <GradientLeft className={`${style.background1}`} /> */}
      <GradientRight className={`${style.background2} background2`} />
      <GradientRight className={`${style.background3} background3`} />

      <Navbar />
      <ScrollTop />
      <main>{children}</main>
      <Footer />
      {/* <img
        src={backgroundImg1}
        alt="background image"
        className={`${style.background1}`}
      />
      <img
        src={backgroundImg2}
        alt="background image2"
        className={`${style.background2}`}
      /> */}
    </>
  );
}
