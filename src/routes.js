import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />{" "}
        {/* Exact necessary otherwise all pages will be Logon page*/}
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
