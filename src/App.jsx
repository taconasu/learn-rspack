// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";

import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GradientText>Hello</GradientText>
        <Counter />
      </header>
    </div>
  );
}

export default App;

const GradientText = styled.span`
  background: linear-gradient(#e66465, #9198e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-size: 48px;
  font-weight: bold;
`;
