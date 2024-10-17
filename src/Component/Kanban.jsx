import React from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Column from "./Column";
import { updateTaskStatus } from "../Redux/Kanban/kanbanSlice";
const Kanban = () => {
  // calling dispatch function to use reducers
  const dispatch = useDispatch();
  // initilizing the coloumn
  const columns = {
    todo: "To Do",
    inprogress: "In Progress",
    peerreview: "Peer Review",
    done: "Done",
  };
  // getting the data from the store using reducer and useSelector to acces the data
  const tasks = useSelector((state) => state.kanban.tasks);
  //getting the state from the store using useSelector
  const searchQuery = useSelector((state) => state.kanban.searchQuery);
  // Drag event handlers for deaging
  const onDragEnd = (result) => {
    if (!result.destination) return;
    // drag event handler calling the reducer using dispatch function
    dispatch(
      updateTaskStatus({
        id: result.draggableId,
        status: result.destination.droppableId,
      })
    );
  };
  // filter the tasks according to search functionality
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* making the entire component draggable dropable */}
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, columnName]) => (
            <TaskList key={columnId}>
              <Column
                key={columnId}
                columnId={columnId}
                columnName={columnName}
                tasks={filteredTasks.filter((task) => task.status === columnId)}
              />
            </TaskList>
          ))}
        </TaskColumnStyles>
      </DragDropContext>
    </>
  );
};

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  background-color: #dff5ff;

  /* --------- */
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
  border: solid black;
  margin: 5px;
  min-width: 341px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

export default Kanban;
