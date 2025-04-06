import React from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <>
      <Logo title="seb.ui" />
      <div className="app app-bg flex">
        <Counter />
      </div>
    </>
  );
}

export default App;
