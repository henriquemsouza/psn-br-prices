import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, InputGroup, Input } from "reactstrap";
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
        <InputGroup>
          <Input
            type="number"
            autoComplete="off"
            placeholder="Qtd a ser exibida"
            className="amountItens"
          />
        </InputGroup>
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
