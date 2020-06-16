import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import "@public/style.css";

import { Landing } from "@/pages/landing/index";

const AppWrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292929;
  color: white;
`;

const App = () => {
  return (
    <AppWrapperDiv>
      <Landing />
    </AppWrapperDiv>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
