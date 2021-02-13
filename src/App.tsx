import * as React from "react";
// import { Loading } from "./components/Loading";
import { ConditionallyRendered } from "./components/conditionallyRendered";
// import { BigImage } from "./components/bigImage";
import logo from "./logo.svg";
import "./styles/App.css";

// const Carousel = React.lazy(() => import("./components/carousel"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>Test 1 using lazy &amp; suspense</h1>
      {/* <React.Suspense fallback={<Loading />}> */}
      {/* <Carousel /> */}
      {/* </React.Suspense> */}

      <h1>Test 2 conditionally rendering</h1>
      <ConditionallyRendered />
    </div>
  );
}

export default App;
