import * as React from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import { useState } from "react";

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
`;

type usecase = "submit" | "clear";
type buttonProps = {
  color: usecase;
};

export const CreateLogin = () => {
  const [list, setList] = useState([
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

  return (
    <CreateLoginWrapper>
      <h2>CREATE LOGIN</h2>
      <TextboxArea placeholder="E-Mail or Username" />
      <TextboxArea placeholder="Password" />
      <Dropdown
        placeholder="select app"
        options={list}
        selection
        style={{
          width: "400px",
          margin: "10px",
          border: "1px solid gray",
          height: "40px",
          textAlign: "center",
          color: "Black",
        }}
      />
      <ButtonWrapper>
        <BasicButton color={"submit"}>submit</BasicButton>
        <BasicButton color={"clear"}>clear</BasicButton>
      </ButtonWrapper>
    </CreateLoginWrapper>
  );
};
