import * as React from "react";
import { HashRouter, Route, Link, Router } from "react-router-dom";
import styled from "styled-components";

const SidebarPanelWrapperDiv = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #1e1e1e;
`;

export const SidebarPanel = () => {
  return (
    <SidebarPanelWrapperDiv>
      <HashRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
        </ul>
      </HashRouter>
    </SidebarPanelWrapperDiv>
  );
};
