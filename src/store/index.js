import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './book/bookSlice';
import { userSlice } from './user/userSlice';

export default configureStore({
    reducer: {
        [bookSlice.name]: bookSlice.reducer,
        [userSlice.name]: userSlice.reducer
    },
})