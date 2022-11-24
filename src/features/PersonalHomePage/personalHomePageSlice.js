import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomepage",
  inintialState: {
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

export const selectPersonalHomePageState = (state) => state.personalHomepage;
export const selectPersonalHomePageStatus = (state) =>
  selectPersonalHomePageStatus(state).status;
export const selectPersonalHomePageRepo = (state) =>
  selectPersonalHomePageStatus(state).repositories;

export default personalHomePageSlice.reducer;
