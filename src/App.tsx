import React from "react";
import "./style/style.scss";

import Footer from "./component/Footer";

import Routes from "./router";

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
