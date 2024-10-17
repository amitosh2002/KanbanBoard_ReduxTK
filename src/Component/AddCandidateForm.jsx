import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemProperty } from "../Redux/Kanban/kanbanSlice";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import "../App.css";
const AddCandidateForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    // To prevent the default behavior of form submission
    e.preventDefault();
    //creating a new task to add to todo
    const newTask = {
      //using uuidv4 for assigning the unique id to each task
      id: uuidv4(),
      title,
      description,
      status: "todo",
    };
    //calling the dispath function to the reducer
    dispatch(addItemProperty(newTask));
    // After adding data , Emtpy the states for another add item
    setTitle("");
    setDescription("");
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newPropertyName">Title : </label>
      <input
        type="text"
        id="newPropertyName"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title "
        required
      />

      <label htmlFor="newPropertyValue">Description : </label>
      <input
        type="text"
        id="newPropertyValue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the description"
        required
      />
      <button type="submit">Add Candidate</button>
    </form>
  );
};
export default AddCandidateForm;
