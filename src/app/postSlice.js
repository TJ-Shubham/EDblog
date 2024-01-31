import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
        },
        getPost: (state, action) => {
            return state.posts.find(post => post.id === action.payload.id);
        },
        getAllPosts: (state) => {
            return state.posts;
        },

    }
})

export const {addPost, updatePost, deletePost, getPost, getAllPosts} = postSlice.actions;
export default postSlice.reducer;