import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container } from "reactstrap";
import LoadingBar from "react-redux-loading-bar";
import ErrorAlert from "./ErrorAlert";
import Navigation from "./Navigation";
import Footer from "./Footer";

import Home from "../Home/Home";

import NotFound from "./NotFound";
import "./Main.css";


const Main = (props) => (
  <div className="contectB">
    <header className="contectH">
      <Navigation />
      <LoadingBar className="loading" />
      <ErrorAlert errors={props.errors} />
    </header>

    <main className="contectM">
      <Container className="mainContainer">
        <Switch className="mainSwitch">
          <Route path="/" exact={true} render={() => <Home {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </main>

    <footer className="mainFooter">
      <Footer />
    </footer>
  </div>
);

export default Main;