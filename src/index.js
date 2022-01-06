import ReactDOM from "react-dom";
import React from "react";

import theme from "./theme/default";

import contextReducer, { initialState } from "./context/stateReducer";
import { StateProvider } from "./context/stateProvider";
import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={contextReducer}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
