import { createSlice } from "@reduxjs/toolkit";
// passing the default task to the store
const initialTasks = [
  {
    id: "1",
    title: "library",
    description: "install all the npm commands",
    status: "todo",
  },
  {
    id: "2",
    title: "Inprogress development",
    description: "Development of API are in Progress",
    status: "inprogress",
  },
  {
    id: "3",
    title: "UI dispatch",
    description: "UI is shered with client for preer review",
    status: "peerreview",
  },
  {
    id: "4",
    title: "UI completed",
    description:
      "Ui has been approved by the clinet now work on in progress tasks.",
    status: "done",
  },
];

// creating slice for kanban board data
const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    // passing the initial task as tasks
    tasks: initialTasks,
    // initilizing the serch query for search function
    searchQuery: "",
  },
  //   creating micro reducders for each function
  reducers: {
    addItemProperty: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      );
      return { ...state, tasks: updatedTasks };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
// exporting the properties as a action creater for use
export const { addItemProperty, setSearchQuery, updateTaskStatus } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;
