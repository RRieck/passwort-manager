import * as React from "react";
import { HashRouter, Route, Link, Router } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const SidebarPanelWrapperDiv = styled.div<sidebarStyleProps>`
  height: 100vh;
  width: 200px;
  padding: 15px;
  position: relative;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(-120px)"};
  transition: transform 0.3s;
  background-color: #1e1e1e;
  z-index: 1;
  display: flex;
  flex-direction: column;

  div:last-child {
    margin-top: auto;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkItemContainer = styled.div`
  color: white;
  font-size: 30px;
  width: 170px;
  height: 100px;
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const ExpandWrapperDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: white;
  font-size: 30px;
  width: 170px;
  text-align: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
`;

type sidebarStyleProps = {
  isActive: boolean;
};

export const SidebarPanel = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <SidebarPanelWrapperDiv isActive={isActive}>
      <HashRouter>
        <LinkContainer>
          <LinkItemContainer>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
                display: "inherit",
                alignItems: "center",
                width: "inherit",
                justifyContent: "space-between",
              }}
              to="/"
            >
              Home
              <Icon size="large" name="home" color="grey" />
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
                display: "inherit",
                alignItems: "center",
                width: "inherit",
                justifyContent: "space-between",
              }}
              to="/create"
            >
              Create
              <Icon size="large" name="add" color="grey" />
            </Link>
          </LinkItemContainer>
        </LinkContainer>
      </HashRouter>
      <ExpandWrapperDiv onClick={() => setIsActive(!isActive)}>
        <Icon name="expand" size="large" color="grey" />
      </ExpandWrapperDiv>
    </SidebarPanelWrapperDiv>
  );
};
