import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        posts: postSlice,
        favouritePosts: favouriteSlice,
    }

})

export default store;