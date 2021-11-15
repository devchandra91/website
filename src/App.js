import { React } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Home from "./components/mainfolder/home";
import Layout from "./components/Layout";

export default function App() {
  let location = useLocation();
  return (
    <div>
      <Layout>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    </div>
  );
}
