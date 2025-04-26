import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks for API calls
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch(
    "https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById"
  );
  return await res.json();
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (id) => {
    const res = await fetch(
      `https://680cbd742ea307e081d4e50f.mockapi.io/blogs/getBlogById/${id}`
    );
    return await res.json();
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchBlogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // fetchBlogById
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
