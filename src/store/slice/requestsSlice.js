import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  role: "User",
  filter: "all",
  requests: [],
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    addRequest: (state, action) => {
      state.requests.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        status: "new",
      });
    },
    changeStatus: (state, action) => {
      const request = state.requests.find((r) => r.id === action.payload);

      if (!request) return;

      if (request.status === "new") {
        request.status = "in progress";
      } else if (request.status === "in progress") {
        request.status = "done";
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setRole, addRequest, changeStatus, setFilter } =
  requestSlice.actions;

export default requestSlice.reducer;
