import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogDataService from "../services/BlogServices";

const initialState = [];

export const createBlog = createAsyncThunk(
  "blog/create",
  async ({ title, description }) => {
    const res = await BlogDataService.create({ title, description });
    return res.data;
  }
);

export const retrieveBlogs = createAsyncThunk(
  "blog/retrieve",
  async () => {
    const res = await BlogDataService.getAll();
    return res.data;
  }
);

export const updateBlog = createAsyncThunk(
  "blog/update",
  async ({ id, data }) => {
    const res = await BlogDataService.update(id, data);
    return res.data;
  }
);

export const deleteBlog = createAsyncThunk(
  "tutorials/delete",
  async ({ id }) => {
    await BlogDataService.remove(id);
    return { id };
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: {
    [createBlog.fulfilled]: (state, action) => {
      state.push(action.payload);
    },

    [retrieveBlogs.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [updateBlog.fulfilled]: (state, action) => {
      const index = state.findIndex(blog => blog.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },

    [deleteBlog.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },

  },
});

const { reducer } = blogSlice;
export default reducer;