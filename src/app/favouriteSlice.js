import { createSlice } from "@reduxjs/toolkit";

const favouritePostsInitialState = {
    favouritePosts: [],
};

const favouritePostsSlice = createSlice({
    name: "favouritePosts",
    initialState: favouritePostsInitialState,
    reducers:{
        addFavouritePost: (state, action) => {
            state.favouritePosts.push(action.payload);
        },
    }
})

export const {addFavouritePost} = favouritePostsSlice.actions;
export default favouritePostsSlice.reducer;