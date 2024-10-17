import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Redux/Kanban/kanbanSlice";
import styled from "styled-components";
const SearchInput = () => {
  // calling the dispatch function to pass the payload to the reducer
  const dispatch = useDispatch();

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </InputContainer>
  );
};
const InputContainer = styled.div`
  input {
    padding: 8px;
    margin: 8px;
  }
`;
export default SearchInput;
