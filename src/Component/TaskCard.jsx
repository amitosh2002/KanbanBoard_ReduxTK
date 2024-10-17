import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import AddCandidateForm from "./AddCandidateForm";
import Card from "./Card";

const TaskCard = ({ task, index, columnId }) => {
  return (
    // making the TaskCard dragable using dnd property
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* passing the title and description to the card component  */}
          <Card title={task.title} description={task.description} />
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
