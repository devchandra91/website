import Footer from "./footer";
import Navigation from "./header/navbar";

export default function Layout(props) {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
}
