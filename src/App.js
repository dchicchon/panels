import React from "react";
// import Panel from "./Components/Panel";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import ReactPanels from "./Pages/ReactPanels";
import CssPanels from "./Pages/CssPanels";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ReactPanels} />
        <Route exact path="/css" component={CssPanels} />
      </Switch>
    </Router>
  );
};

export default App;
