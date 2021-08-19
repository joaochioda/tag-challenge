import React from "react";
import ReactDOM from "react-dom";
import Book from "../src/components/templates/Book";
import Home from "../src/components/templates/Home";

import Theme from "./styles/theme";
import { Route, BrowserRouter, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route path="/" exact component={Book} />
          <Route path="/books" component={Home} />
        </Switch>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
