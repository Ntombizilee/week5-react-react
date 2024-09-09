import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Ntombizilee/"
            target="_blank"
            rel="noreferrer"
          >
            Ntombizile Mabuso
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ntombizilee/week5-react-react/tree/master/src"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://66def5d109c7050083d7a6d4--silver-sable-e52127.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
