import * as React from "react";
import { SidebarPanel } from "@/components/SidebarPanel";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "../home";
import { Create } from "../create";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";

const MainWrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const ComponentWrapperDiv = styled.div`
  width: 100%;
  right: 200px;
  position: relative;
`;

export const Landing = () => {
  return (
    <MainWrapperDiv>
      <SidebarPanel />
      <HashRouter>
        <ComponentWrapperDiv>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create" exact>
            <Create />
          </Route>
        </ComponentWrapperDiv>
      </HashRouter>
    </MainWrapperDiv>
  );
};
