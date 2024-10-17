import React from "react";
import Kanban from "./Component/Kanban";
import SearchInput from "./Component/SearchInput";
import AddCandidateForm from "./Component/AddCandidateForm";
import styled from "styled-components";
import "./App.css";

const App = () => {
  return (
    <Wrapper>
      <h1>Kanban Board- Task Manager (Redux TK)</h1>
      <Functionality>
        <SearchInput />
        <AddCandidateForm />
      </Functionality>
      <Kanban />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fef9f2;
  h1 {
    background: conic-gradient(
      #553c9a 0%,
      #553c9a 33%,
      #ee4b2b 33%,
      #ee4b2b 66%,
      #00c2cb 66%,
      #00c2cb 99%
    );
    text-shadow: 0 0 0 rgba(0, 0, 0, 1);
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
const Functionality = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
`;

export default App;
