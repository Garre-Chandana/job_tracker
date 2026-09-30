import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 101,
    company: "Amazon",
    role: "Software Developer Intern",
    status: "Applied"
  },
  {
    id: 102,
    company: "Salesforce",
    role: "Developer Intern",
    status: "Interview"
  },
  {
    id: 103,
    company: "Microsoft",
    role: "Data Science Intern",
    status: "Selected"
  }
];

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addApplication } = applicationsSlice.actions;

export default applicationsSlice.reducer;