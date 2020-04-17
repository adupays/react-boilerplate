import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header title="My title"></Header>
      <Router>
        <Main path="/" />
      </Router>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
