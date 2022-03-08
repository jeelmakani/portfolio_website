/* eslint-disable @next/next/no-img-element */
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import GradientRight from "../assets/svg-components/GradientRight";
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
    </>
  );
}
