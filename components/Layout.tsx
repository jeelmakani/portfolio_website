import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}
