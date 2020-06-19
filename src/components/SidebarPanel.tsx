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
  right: ${(props) => (props.isActive ? "130px" : "0px")};
  background-color: #1e1e1e;
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

type sidebarStyleProps = {
  isActive: boolean;
};

export const SidebarPanel = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <SidebarPanelWrapperDiv
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      <HashRouter>
        <LinkContainer>
          <LinkItemContainer>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
                display: "inherit",
                width: "inherit",
                justifyContent: "space-between",
              }}
              to="/"
            >
              Home
              <Icon name="home" color="grey" />
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
                display: "inherit",
                width: "inherit",
                justifyContent: "space-between",
              }}
              to="/create"
            >
              Create
              <Icon name="add" color="grey" />
            </Link>
          </LinkItemContainer>
        </LinkContainer>
      </HashRouter>
    </SidebarPanelWrapperDiv>
  );
};
