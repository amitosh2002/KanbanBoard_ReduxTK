import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "../Redux/Kanban/kanbanSlice";
// Making the store to store the data for reducers using edux toolkit
const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export default store;
