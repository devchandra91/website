import React from "react";
import MainContent from "./maincontent";
import Form from "./form";
import AboutYou from "./aboutyou";
import AboutUs from "./aboutus";

export default function Home() {
  return (
    <React.Fragment>
      <MainContent />
      <AboutUs />
      <Form />
      <AboutYou />
    </React.Fragment>
  );
}
