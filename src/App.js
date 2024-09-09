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
            href="https://github.com/Ntombizilee/week5-react"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://66db34ed4a655e6a7b7720ee--fastidious-salmiakki-c3ec4c.netlify.app/"
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
