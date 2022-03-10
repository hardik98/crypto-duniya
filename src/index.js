import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
