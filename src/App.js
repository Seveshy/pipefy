import React, { Fragment } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Fragment>
      <Header />
      <Board />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
