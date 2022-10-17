import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import {Provider} from "react-redux"
// import store from "./Redux/store";

import { Provider } from "react-redux";
import { ProSidebarProvider } from "react-pro-sidebar";
import { StateContextProvider } from "./Contex/StateContext";
import store from "./store";

const theme = extendTheme({
  fonts: {
    heading: `Brandon Text,Arial,sans-serif`,
    body: `Brandon Text,Arial,sans-serif`,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ProSidebarProvider>
          <StateContextProvider>
            <App />
          </StateContextProvider>
        </ProSidebarProvider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
