import React from "react";
// import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<App />, document.getElementById('root'))
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
