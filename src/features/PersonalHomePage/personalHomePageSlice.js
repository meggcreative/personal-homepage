import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomePage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (state, { payload: repositories }) => ({
      status: "success",
      repositories: repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = personalHomePageSlice.actions;

export const selectPersonalHomePageState = (state) => state.personalHomePage;
export const selectPersonalHomePageStatus = (state) =>
  selectPersonalHomePageState(state).status;
export const selectPersonalHomePageRepo = (state) =>
  selectPersonalHomePageState(state).repositories;

export default personalHomePageSlice.reducer;
