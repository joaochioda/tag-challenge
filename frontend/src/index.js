import React from "react";
import ReactDOM from "react-dom";
import Book from "../src/components/templates/Book";
import Home from "../src/components/templates/Home";

import Theme from "./styles/theme";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "../src/styles/global.css";

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book/:bookId" component={Book} />
      </Switch>
    </Theme>
  </BrowserRouter>,
  document.getElementById("root")
);
