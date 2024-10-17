import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Column = ({ columnId, columnName, tasks }) => {
  return (
    <Wrapper>
      {/* // making the column droapable using Droappable property from @hello-pangea/dnd */}
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="column"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {columnName}
            </h2>
            {/* mapping all the task and passing to the tasskCard as a prop */}
            {tasks.map((task, index) => {
              return <TaskCard key={task.id} task={task} index={index} />;
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Column;
