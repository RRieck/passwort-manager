import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Landing } from "./landing/index";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const Base = styled.div`
  *,
  body,
  html {
    margin: 0px !important;
    padding: 0px !important;
  }
`;

const App = () => {
  return (
    <Base>
      <Landing />
    </Base>
  );
};

ReactDOM.render(<App />, mainElement);
