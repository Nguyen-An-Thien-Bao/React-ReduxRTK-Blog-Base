import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './Components/BogList/blogReducer';

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
    },
});
