import App from "./components/App";
import { QuestionsContextProvider } from "./contexts/Questions";
import * as React from "react";
import ReactDOM from "react-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <App />
    </QuestionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
