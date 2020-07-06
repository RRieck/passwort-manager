import * as React from "react";
import styled from "styled-components";
import { Dropdown, Icon, DropdownItemProps } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Options } from "electron";

const CreateLoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextboxArea = styled.input.attrs({ type: "text" })`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  text-align: center;
  outline: none;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const BasicButton = styled.button<buttonProps>`
  width: 150px;
  height: 40px;
  font-weight: bold;
  background-color: ${(props) =>
    props.color === "submit" ? "#5bcaff" : "#ff9185"};
  border: none;
  border-radius: 5px;
`;

const RefreshIconWrapperDiv = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
`;

type usecase = "submit" | "clear";

type buttonProps = {
  color: usecase;
};

export const CreateLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [list, setList] = useState<DropdownItemProps[]>();

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    setList([
      {
        key: "overwatch",
        text: "Overwatch",
        value: "overwatch",
      },
      {
        key: "instagramm",
        text: "Instagramm",
        value: "instagramm",
      },
    ]);
  };

  const handleClearInput = () => {
    setUsername("");
    setPassword("");
  };

  const handleSubmit = () => {
    console.log("ayy");
  };

  return (
    <CreateLoginWrapper>
      <RefreshIconWrapperDiv onClick={() => handleRefresh}>
        <Icon name="refresh" size="big" inverted />
      </RefreshIconWrapperDiv>
      <h2>CREATE LOGIN</h2>
      <TextboxArea
        placeholder="E-Mail or Username"
        style={{ cursor: "pointer" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextboxArea
        placeholder="Password"
        style={{ cursor: "pointer" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Dropdown
        placeholder="select app"
        options={list}
        style={{
          width: "400px",
          margin: "10px",
          border: "1px solid gray",
          backgroundColor: "white",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "Black",
        }}
      />
      <ButtonWrapper>
        <BasicButton
          color={"submit"}
          style={{ cursor: "pointer" }}
          onClick={() => handleSubmit()}
        >
          submit
        </BasicButton>
        <BasicButton
          color={"clear"}
          style={{ cursor: "pointer" }}
          onClick={() => handleClearInput()}
        >
          clear
        </BasicButton>
      </ButtonWrapper>
    </CreateLoginWrapper>
  );
};
